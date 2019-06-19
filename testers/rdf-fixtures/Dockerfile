FROM debian
RUN apt-get update && apt-get install -yq build-essential \
    liblwp-protocol-https-perl \
    libmoose-perl \
    libplack-perl \	   
    libtest-lwp-useragent-perl \	
    libtest-modern-perl \
    libtest-rdf-perl \
    libtypes-uri-perl \
    libxml-parser-perl \
    libxml-simple-perl \
    perl \
    perlbrew \
    && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -yq `apt-cache depends libattean-perl | awk '/Depends:/{print$2}'`
RUN apt-get update && apt-get install -yq `apt-cache depends liburi-namespacemap-perl | awk '/Recommends:/{print$2}'`
RUN perlbrew install-cpanm
RUN /root/perl5/perlbrew/bin/cpanm install Test::FITesque::RDF
RUN apt-get update && apt-get install -yq git
RUN git clone https://github.com/kjetilk/p5-web-solid-test-basic
ENV PERL5LIB /p5-web-solid-test-basic/lib
ENV SOLID_REMOTE_BASE http://server:8080/
COPY run-scripts/ /opt/run-scripts/
COPY fixture-tables/ /opt/fixture-tables/
CMD prove -l /opt/run-scripts/
