"""Queue handling class helper for CrackQ->RQ"""
import json
import logging
from pathlib import Path
import rq

from crackq import cq_api
from crackq.conf import hc_conf
from logging.config import fileConfig
from redis import Redis
from rq import use_connection, Queue
from rq.registry import StartedJobRegistry

# Setup logging
fileConfig('log_config.ini')
logger = logging.getLogger()

CRACK_CONF = hc_conf()


class Queuer(object):
    """
    Queue handler class used to build and manage a queue of hashcat jobs
    """
    def __init__(self):
        rconf = CRACK_CONF['redis']
        self.redis_con = Redis(rconf['host'], rconf['port'])
        self.log_dir = CRACK_CONF['files']['log_dir']

    def q_add(self, q_obj, arg_dict, timeout=30240):
        """
        This method adds a new crack job to the queue

        Parameters
        ---------
        job_id: str
                uuid string corresponding to job ID
        q_obj: object
                queue object to use (returned from q_connect)
        arg_dict: dict
                hc_worker function arguments to run hashcat
        timeout: int
                number of seconds before job will time out

        Returns
        -------
        boolean
            Success or failure
        """
        logger.info('Adding task to job queue: '
                    '{:s}'.format(arg_dict['job_id']))
        q_obj.enqueue_call(func=arg_dict['func'], job_id=arg_dict['job_id'],
                           kwargs=arg_dict['kwargs'], timeout=timeout,
                           result_ttl=-1)
        return

    def q_monitor(self, q_obj):
        """
        Method to monitor jobs in queue

        Query the queue and return the results of all jobs..

        Parameters
        ---------
        job_id: str
                uuid string corresponding to job ID (optional)
                if not provided this will return data for all jobs
        q_obj: object
                queue object to use (returned from q_connect)

        Returns
        -------
        qstate_dict: dictionary
                dictionary containing job details and hashcat status
        """
        jobstate_dict = {job.id: self.q_jobstate(job) for job in
                         q_obj.jobs}

        cur_jobs = StartedJobRegistry('default',
                                      connection=self.redis_con).get_job_ids()
        cur_job_dict = {job: self.q_jobstate(q_obj.fetch_job(job)) for job in cur_jobs}
        qstate_dict = {
            'Queue Size': q_obj.count,
            'Queued Jobs': jobstate_dict,
            'Current Job': cur_job_dict,
            }
        return qstate_dict

    def q_jobstate(self, job):
        """
        Method to pull info for specified job

        Parameters
        ---------
        job_id: str
                uuid string corresponding to job ID
        q_obj: object
                queue object to use (returned from q_connect)

        Returns
        -------
        job_dict: dictionary
            dictionary containing job stats and meta data
        """
        logger.debug('Getting job state')
        if job:
            job_dict = {
                'Status': job.get_status(),
                'Time started': str(job.started_at),
                'Time finished': str(job.ended_at),
                'Result': job.result,
                'State': job.meta,
                }
            if 'HC State' not in job.meta:
                try:
                    logger.debug('No HC state, checking state file')
                    job_id = str(job.id)
                    job_file = Path(self.log_dir).joinpath('{}.json'.format(job_id))
                    with open(job_file, 'r') as jobfile_fh:
                        job_deets = json.loads(jobfile_fh.read().strip())
                        state_dict = {
                            'Cracked Hashes': job_deets['Cracked Hashes'],
                            'Total Hashes': job_deets['Total Hashes'],
                            'Progress': 0
                            }
                        job_dict['State']['HC State'] = state_dict
                except IOError as err:
                    logger.debug('Failed to open job file: {}'.format(err))
                except Exception as err:
                    logger.debug('Failed to open job file: {}'.format(err))
            return job_dict
        return None

    def q_connect(self, queue='default'):
        """
        Method to setup redis connection

        Parameters
        ----------
        redis_conn : str
            redis connection url/string
        queue: str
            queue to connect to. default is 'default'

        Returns
        -------
        object
            redis connection object
        """
        rqueue = Queue(queue, connection=self.redis_con)
        return rqueue

    def error_parser(self, job):
        """
        Method to parse traceback errors from crackq and hashcat/pyhashcat

        Arguments
        ---------
        job: object
            RQ job object

        Returns
        -------
        err_msg: string
            Readble error string without the guff, for users
        """
        if job is not None:
            logger.debug('Parsing error message: {}'.format(job.exc_info))
            err_split = job.exc_info.strip().split('\n')
            if 'Traceback' in err_split[0]:
                err_msg = err_split[-1].strip().split(':')[-1]
            else:
                err_msg = job.exc_info.strip()
            logger.debug('Parsed error: {}'.format(err_msg))
            return err_msg
        else:
            return None

    def check_failed(self):
        """
        This method checks the failed queue and print info to a log file

        Parameters
        ---------
        log_file : str
            log file name to write to

        Returns
        -------
        success : boolean
        """
        try:
            failed_dict = {}
            failed_reg = rq.registry.FailedJobRegistry('default',
                                                       connection=self.redis_con)
            if failed_reg.count > 0:
                q = failed_reg.get_queue()
                for job_id in failed_reg.get_job_ids():
                    failed_dict[job_id] = {}
                    job = q.fetch_job(job_id)
                    failed_dict[job_id]['Error'] = self.error_parser(job)
                    try:
                        name = cq_api.get_jobdetails(job.description)['name']
                        failed_dict[job_id]['Name'] = name
                    except KeyError:
                        failed_dict[job_id]['Name'] = 'No name'
                    except AttributeError:
                        failed_dict[job_id]['Name'] = 'No name'
            logger.debug('Failed dict: {}'.format(failed_dict))
            return failed_dict
        except AttributeError as err:
            logger.warning('Error getting failed queue: {}'.format(err))
            return {}

    def check_complete(self):
        """
        This method checks the completed queue and print info to a log file

        Parameters
        ---------

        Returns
        -------
        comp_list: rq.registry
            Finished job registry
        """
        comp_list = rq.registry.FinishedJobRegistry('default',
                                                    connection=self.redis_con).get_job_ids()
        return comp_list

