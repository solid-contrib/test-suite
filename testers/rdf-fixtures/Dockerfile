FROM debian
RUN apt-get update
RUN apt-get install -yq perl build-essential
RUN apt-get install -yq perlbrew
RUN apt-get install -yq libxml-parser-perl libxml-simple-perl libplack-perl libmoose-perl libtypes-uri-perl libtest-modern-perl libtest-lwp-useragent-perl
RUN apt-get install -yq libtest-rdf-perl
RUN apt-get install -yq liblwp-protocol-https-perl
RUN apt-get install -yq `apt-cache depends libattean-perl | awk '/Depends:/{print$2}'`
RUN apt-get install -yq `apt-cache depends liburi-namespacemap-perl | awk '/Recommends:/{print$2}'`
RUN perlbrew install-cpanm
RUN /root/perl5/perlbrew/bin/cpanm install Test::FITesque::RDF
RUN /root/perl5/perlbrew/bin/cpanm install Web::Solid::Test::Basic
ENV SOLID_REMOTE_BASE http://server:8080/

CMD prove -l testers/rdf-fixtures/run-scripts/
