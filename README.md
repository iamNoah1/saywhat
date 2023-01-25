# say-what

A simple brain dead nodejs server that return a message specified by the env variable `RESPONSE_MESSAGE`. If the env variable is not set, there is a default message. 

The port can also be specified optionally by setting the `PORT` env variable. Default is 3000

Note: Docker and Helm support is there, as you find the image in the official [dockerhub](https://hub.docker.com/repositories/iamnoah4real), as well as the helm chart. 

## Run 
* `npm install`
* `RESPONSE_MESSAGE=hello npm start`

## Run with Docker
* `docker run -p 3000:3000 -e RESPONSE_MESSAGE='hello' iamnoah4real/saywhat`

## Run with Helm
* `helm install saywhat oci://registry-1.docker.io/iamnoah4real/saywhat-chart`

## Endpoint
* "<host>/hello"