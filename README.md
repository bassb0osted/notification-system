# notification-system

## Run the following command to start the app:
#### docker compose up

## Info:
### user-ms
#### user-ms - microservice that is responsible for handling HTTP requests and saving the user in the PG.
#### You can run the following HTTP request to create the user:
#### POST http://localhost:3000/users, BODY: { "username": "Alina" }

### notification-ms
#### notification-ms - microservice that is responsible for notifications. It uses nest/bull to deliver delayed messages

#### Services are connected using RabbitMQ
