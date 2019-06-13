FROM ubuntu
RUN apt-get update
RUN apt-get install -yq perl build-essential
RUN apt-get install -yq perlbrew
RUN apt-get install -yq libxml-parser-perl libxml-simple-perl libplack-perl libmoose-perl libtypes-uri-perl libtest-modern-perl libtest-lwp-useragent-perl liblwp-protocol-https-perl
RUN apt-get install -yq `apt-cache depends libattean-perl | awk '/Depends:/{print$2}'`
RUN apt-get install -yq `apt-cache depends liburi-namespacemap-perl | awk '/Recommends:/{print$2}'`
RUN perlbrew install-cpanm
RUN /root/perl5/perlbrew/bin/cpanm install Test::FITesque::RDF
RUN apt-get install -yq git
RUN git clone https://github.com/kjetilk/p5-web-solid-test-basic
WORKDIR p5-web-solid-test-basic
ENV SOLID_REMOTE_BASE http://server:8080/
CMD prove -l tests/
