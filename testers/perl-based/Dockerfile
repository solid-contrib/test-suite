FROM ubuntu
RUN apt-get update
RUN apt-get install -yq perl build-essential
RUN apt-get install -yq perlbrew
RUN perlbrew install-cpanm
RUN /root/perl5/perlbrew/bin/cpanm install Test::FITesque::RDF
RUN apt-get install -yq git
RUN git clone https://github.com/kjetilk/p5-web-solid-test-basic
WORKDIR p5-web-solid-test-basic
ENV SOLID_REMOTE_BASE https://kjetiltest4.dev.inrupt.net/
CMD prove -l tests/basic.t
