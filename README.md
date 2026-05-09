# Introduction to SIKE

Introduction to SIKE is a didactic web thought to explain and show the functionning of the SIKE protocol.

## Running locally

You can run the project locally in two different ways.

### 1. Docker

If you have Docker and docker compose installed in your machine, you simply have to run the following command:

```
docker-compose up --build
```

and the application will be accesible through via `http://localhost:3000`. The backend will be accesible in port 8080, too, just in case.

### 2. Manual

In case you don't have docker installed, you can start both applications manually.

First, go to the `/backend` directory and run

```
mvn install
mvn spring-boot:run
```

or, if you prefer it,

```
java -jar target/backend-1.0.0.jar
```

Then, initialize the frontend from its directory.

```
npm install
```

Once the dependencies are installed, you can run the application using

```
npm run start
```

or, for an optimized version

```
npm run build
serve -s build
```
