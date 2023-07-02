# Project Challenge FullCycle Docker
## Challenge Go
### How run project in Dev Container? 
docker run -it --rm --name challenge-go -v $(pwd)/go:/usr/src/app golang:1.20.5-alpine3.18
docker attach  challenge-go


## How Build image
### inside folder /go run command 
docker build -t rodrigocarrico/fullcycle -f Dockerfile.prod .

## How run image
docker run --rm rodrigocarrico/fullcycle

## How push image to DockerHub
### First you need to login
docker login

### Second
docker push rodrigocarrico/fullcycle:latest


## Challenge Node
### How run project in Dev Container? 
docker run -it --rm -p 3000:3000 --name challenge-node -v $(pwd)/node:/app --network node_node-network  node:20-slim bash


