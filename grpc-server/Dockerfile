FROM adoptopenjdk/openjdk11:alpine-jre
ARG JAR_FILE=target/grpc-server-0.0.1-SNAPSHOT.jar
WORKDIR /opt/app
COPY ${JAR_FILE} grpc-server.jar
ENTRYPOINT ["java","-jar", "grpc-server.jar"]