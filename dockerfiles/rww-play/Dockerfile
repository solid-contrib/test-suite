FROM scalacenter/scala-docs:1.5
RUN git clone https://github.com/read-write-web/rww-play
WORKDIR rww-play
RUN ./activator compile
CMD ./activator run -Dhttp.port=8080
