FROM maven:3.9.3-eclipse-temurin-17-alpine AS builder
WORKDIR build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17.0.4.1_1-jre AS layers
WORKDIR layer
COPY --from=builder build/target/*.jar app.jar
RUN java -Djarmode=tools -jar app.jar extract --layers --launcher

FROM eclipse-temurin:17.0.4.1_1-jre
WORKDIR application
COPY --from=layers layer/app/dependencies/ ./
COPY --from=layers layer/app/spring-boot-loader/ ./
COPY --from=layers layer/app/snapshot-dependencies/ ./
COPY --from=layers layer/app/application/ ./
EXPOSE 8080
ENTRYPOINT ["java", "org.springframework.boot.loader.launch.JarLauncher"]
