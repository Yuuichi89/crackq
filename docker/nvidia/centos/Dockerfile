FROM nvidia/opencl:runtime-centos7

<<<<<<< HEAD

RUN yum update -y && yum install -y epel-release && yum install -y gcc-c++ make clinfo opencl-headers curl &&\
=======
RUN yum update -y && yum install -y epel-release && yum install -y gcc-c++ make clinfo opencl-headers &&\
>>>>>>> dc2014de03d515446ca60335d1654d24e67ff2b8
yum install -y python36 python36-libs python36-devel python36-pip git circus wget openldap-devel minizip-devel &&\
yum install -y xmlsec1 xmlsec1-openssl
 
ENV DOCKYARD=/opt/crackq/build
ENV PYTHONPATH=$DOCKYARD:/opt/crackq/build/

COPY . $DOCKYARD
WORKDIR $DOCKYARD
RUN $DOCKYARD/setup.sh

EXPOSE 6379
EXPOSE 8081
EXPOSE 8080

ENV LANG "en_US.UTF-8"
ENV LC_ALL "en_US.UTF-8"

RUN chown -R 1111:1111 $DOCKYARD/
USER crackq
WORKDIR $DOCKYARD/
CMD ["/usr/local/bin/circusd", "/opt/crackq/build/circus.ini"]
