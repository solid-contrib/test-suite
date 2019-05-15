FROM maven
RUN git clone https://github.com/trellis-ldp/ldp-testsuite
WORKDIR ldp-testsuite
RUN mvn install -DskipTests -Dgpg.skip -Dmaven.javadoc.skip -B -V
RUN mvn package -DskipTests -Dgpg.skip -Dmaven.javadoc.skip -B -V
RUN mvn verify -Dgpg.skip -Dmaven.javadoc.skip
RUN mkdir -p ldp && mv target/ldp-testsuite-0.2.0-SNAPSHOT-shaded.jar ldp/ldp-testsuite.jar
WORKDIR ldp
CMD java -jar ldp-testsuite.jar --basic --server http://server:8080
