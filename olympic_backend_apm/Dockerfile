# 1st stage, build the app
FROM maven:3.6-openjdk-17 as build
WORKDIR /helidon
ADD pom.xml .
RUN mvn package -Dmaven.test.skip -Declipselink.weave.skip
ADD src src
RUN mvn package -DskipTests


# Download the Otel Java Agent
FROM busybox as agent
WORKDIR /agent
RUN wget https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar


# 2nd stage, build the runtime image
FROM openjdk:17-jdk-slim
WORKDIR /helidon
COPY --from=build /helidon/target/olympic_backend.jar ./
COPY --from=build /helidon/target/libs ./libs
COPY --from=agent /agent ./agent
ENV JAVA_TOOL_OPTIONS=-javaagent:/helidon/agent/opentelemetry-javaagent.jar
CMD ["java", "-jar", "olympic_backend.jar"]
