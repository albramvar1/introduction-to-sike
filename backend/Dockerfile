# This sets the base image. We're using a lightweight Java 17 environment to run our Spring Boot application.
FROM maven:3.9.6-eclipse-temurin-21-jammy

# Set the working directory inside the container to /app
WORKDIR /app

# This copies the compiled JAR into the container.
COPY target/backend-1.0.0.jar app.jar

# This exposes port 8080 so we can access the app from outside the container.
EXPOSE 8080

# This tells Docker how to start the application inside the container.
CMD ["java", "-jar", "app.jar"]