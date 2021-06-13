# Step : Test and package
FROM maven:3.3-jdk-8 as target
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src/ /build/src/
RUN mvn package

# Step : Run Image
FROM adoptopenjdk/openjdk11:alpine-jre
COPY --from=target /build/target/grpc-server-0.0.1-SNAPSHOT.jar grpc-server.jar

ENTRYPOINT ["java","-jar", "grpc-server.jar"]