# Full Stack App Challenge

This is a full stack application consisting of:

- A **.NET Core microservice**
- An **Angular frontend**
- 
## Running the Backend Microservice (Docker)

The .NET backend is containerized. To run it using Docker:

docker build -t challengemicroservice .
docker run -it --rm -p 3000:8080 --name microservicecontainer challengemicroservice

## Running the Frontend (Angular)

The .NET backend is containerized. To run it using Docker:

docker run -it --rm -p 3000:8080 --name microservicecontainer challengemicroservice
