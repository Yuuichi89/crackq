"""CrackQ Authentication handler module"""

import ldap
import requests
from ldap3 import Server, Connection, SIMPLE, SYNC, ALL, SASL, NTLM, SUBTREE
from passlib.hash import lmhash
import hashlib,binascii,ssl

from crackq.logger import logger
from flask import url_for
from saml2 import BINDING_HTTP_POST
from saml2 import BINDING_HTTP_REDIRECT
from saml2 import entity
from saml2.client import Saml2Client
from saml2.config import Config as Saml2Config


class Saml2():
    """
    SAML2 authentication class

    Arguments
    --------
    meta_url: str
        Location of SAML metadata URL
    meta_file: str
        Location to store metadata locally
    entity_id: str
        SAML entity ID (usually hostname/URL)

    Returns
    ------
    """
    def __init__(self, meta_url, meta_file, entity_id):
        self.meta_url = meta_url
        self.meta_file = meta_file
        self.entity_id = entity_id

    def s_client(self):
        """
        Setup and return the SAML client with specified config
        """
        acs_url = url_for('sso',
                          _scheme='https',
                          _external=True)
        logger.debug('SSO ACS URL: {}'.format(acs_url))
        logout_url = url_for('logout',
                             _scheme='https',
                             _external=True)
        try:
            with open(self.meta_file, 'r') as meta_fh:
                meta_len = len(meta_fh.read())
            if meta_len < 1:
                try:
                    res = requests.get(self.meta_url)
                    with open(self.meta_file, 'w') as meta_fh:
                        meta_fh.write(res.text)
                except Exception as err:
                    logger.error('Invalid SAML metadata file/s provided:\n{}'.format(err))
        except FileNotFoundError as err:
            res = requests.get(self.meta_url)
            with open(self.meta_file, 'w') as meta_fh:
                meta_fh.write(res.text)
            #logger.error('Invalid SAML metadata file provided')
        ###***review all of these settings
        settings = {
            'metadata': {
                "local": [self.meta_file]
                },
            'service': {
                'sp': {
                    'name_id_format': 'None',
                    'endpoints': {
                        'assertion_consumer_service': [
                            (acs_url, BINDING_HTTP_REDIRECT),
                            (acs_url, BINDING_HTTP_POST)
                        ],
                        'single_logout_service': [(logout_url, BINDING_HTTP_REDIRECT)]
                    },
                    ###***update some of these if possible
                    'allow_unsolicited': True,
                    #'allow_unknown_attributes': True,
                    'authn_requests_signed': False,
                    'logout_requests_signed': True,
                    'want_assertions_signed': True,
                    'want_response_signed': False,
                    'attribute_map_dir': './attributemaps',
                },
            },
        }
        sp_config = Saml2Config()
        sp_config.load(settings)
        sp_config.entityid = self.entity_id
        sp_config.allow_unknown_attributes = True
        client = Saml2Client(config=sp_config)
        return client


class Ldap():
    """
    LDAP authentication class
    """
    def authenticate(self, uri, username, password, ldap_base=None,ldap_AD=False,ldap_netbiosName=None):
        email = None
        if ldap_AD == 'yes':
            hash_ntlm = hashlib.new('md4',password.encode('utf-16le')).hexdigest()
            hash_lm = lmhash.hash(password)
            password =  hash_lm +':' + hash_ntlm
            s = Server(uri, get_info=ALL)
            domainuser =  ldap_netbiosName + '\\' + username
            c = Connection(s, user=domainuser, password=password, authentication=NTLM)
            #perform Bind
            if not c.bind():
                logger.debug('error in bind', c.result)
                return ("Invalid Credential", None)
            #paged search wrapped in gen getting Mail-Address
            entry_generator = c.extend.standard.paged_search(search_base = ldap_base, search_filter='(sAMAccountName='+username+')', search_scope= SUBTREE, attributes = ['cn', 'mail'], paged_size=5, generator=True)
            for entry in entry_generator:
                email = entry['attributes']['mail']
            c.unbind()
            return ("Success",email)
        try:
            username = ldap.dn.escape_dn_chars(username)
            password = ldap.dn.escape_dn_chars(password)
            conn = ldap.initialize(uri)
            conn.set_option(ldap.OPT_REFERRALS, 0)
            conn.protocol_version = 3
            ###***duplication ehre, review
            #conn.set_option(ldap.OPT_X_TLS,ldap.OPT_X_TLS_DEMAND)
            #conn.set_option(ldap.OPT_X_TLS_REQUIRE_CERT, ldap.OPT_X_TLS_NEVER)
            #conn.set_option(ldap.OPT_X_TLS_DEMAND, True )
            conn.set_option(ldap.OPT_DEBUG_LEVEL, 255)
            #con.start_tls_s()
            if not ldap_base:
                ldap_base = 'dc=example,dc=org'
            bind_base = 'cn={},{}'.format(username, ldap_base)
            bind = conn.simple_bind_s(bind_base, password)
            logger.debug('LDAP bind: {}'.format(bind))
            try:
                query = 'cn={}'.format(username)
                result = conn.search_s(bind_base, 2,
                                       query, ['mail'])
                email = str(result[0][1]['mail'][0], 'utf-8')
                logger.debug('Found email address in LDAP attributes')
            except ldap.NO_SUCH_OBJECT as err:
                logger.debug('Failed to get email address from LDAP: {}'.format(err))
            except KeyError as err:
                logger.debug('Failed to get email address from LDAP: {}'.format(err))
            conn.unbind_s()
            return ("Success", email) if 97 in bind else ("Failed", email)
        except ldap.INVALID_CREDENTIALS:
            return ("Invalid Credentials", email)
        except ldap.SERVER_DOWN:
            return ("Server down", email)
        except ldap.LDAPError as err:
            return "Other LDAP error: {}".format(err)
        return ("Error", email)
