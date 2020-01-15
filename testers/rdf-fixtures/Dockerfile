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
RUN /root/perl5/perlbrew/bin/cpanm install TAP::Formatter::EARL
RUN apt-get install -yq vim
ENV SOLID_BEARER_TOKEN eyJraWQiOiJlNjg4MUNBVDZKel9McW05dkRYNHBtY1FsVmR4NW9fMDVtcXFJR2pReVl3IiwiYWxnIjoiUlMyNTYifQ.eyJ0b2tlbl90eXBlIjoiaWQiLCJpc3MiOiJodHRwczovL2JvYmlkcC5pZHAudGVzdC5zb2xpZHByb2plY3Qub3JnIiwiaWF0IjoxNTc5MDEzOTA4LCJleHAiOjQwNzA5MDg4MDAwMDAsInN1YiI6Imh0dHBzOi8vYm9id2ViaWQuaWRwLnRlc3Quc29saWRwcm9qZWN0Lm9yZy9wcm9maWxlL2NhcmQjbWUiLCJhdWQiOiJodHRwOi8vc2VydmVyOjgwODAifQ.aE6vtHr30eH9NbmGbvQ3FbKhW0lkOCx3CMEgnDKXEVec_DkAc1-K-IbicVmXjMCN5hA4wvPF2NtEcLLhhNO-ds8DsZtjDXrzz9mSQxpTDS6CcnLVE42bX-FyCVnXdiw13HC1cOiFp77iwOzWvpptlkeAP4i7Bv_C1inMpnEkGxYlxMVZHFmZkA7ULTPz0CFaf9tz2G85HgbNkDGiF0o5mVREP2UoprUX1CvqK3sTGPCSlIgfxWRqyzVpiTdEHbovX45vkNgIdXuN-YmYc6uqixAR7Zsc6N0CWVzhiNfBxuKmUVPj1hwQYfL-hluuHc3F9Gro-d5fIqaSx6IBNQvwIQ
COPY run-scripts/ /opt/run-scripts/
COPY fixture-tables/ /opt/fixture-tables/
CMD prove --formatter TAP::Formatter::EARL -l /opt/run-scripts/
