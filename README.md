# qcar
## What is involved

:white_check_mark: Create-react-app

:white_check_mark: Redux - thunk 

:white_check_mark: Apollo client 

:white_check_mark: Graphql

:white_check_mark: Docker

:white_check_mark: Kubernetes

## Note
In this project I have demonstrated data fetch for the first page to get `Car of the week ` using Redux-thunk in more traditional way. The `/action/carActions.js ` is responsible for running the graphql query.
For the rest of the project however, I am using a more recent aproach using [Apollo-client!](https://github.com/apollographql/apollo-client) :rocket: . 

# Run the project
Assuming you are running Node v6  
```
cd client && npm i && npm start 
cd server && npm i && npm start 
```

## Run in docker 
Assuming you are using docker-machine with docker toolbox on mac
run following commands:
```
docker-machine start default
eval $(docker-machine env default)
```
Now that you are connected to your docker deamon run following commands:

```
make docker-down; make docker-compose
```

I am using "make" commands defined in Makefile, Both We are using make commands defined in Makefile. docker-down and docker-compose can be found in the Makefile file. 

# Deployment using Kubernetes (k8s) :rocket:
Just for the sake of demonstration and completenes, I have provided yaml files that can be used to deploy to k8s clusters.

```
kubectl create -f kubernetes/client.yaml
kubectl create -f kubernetes/server.yaml

```

# Development process
The steps that were involved to build up this demo project
1. Creating graphql sever
2. Create-react-app 
3. Add redux-thunk to client
4. Add Apollo to the project
5. Load data rom Apollo client

 
