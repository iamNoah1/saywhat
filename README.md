# say-what

A simple brain dead nodejs server that return a message specified by the env variable `RESPONSE_MESSAGE`. If the env variable is not set, there is a default message. 

The port can also be specified optionally by setting the `PORT` env variable. Default is 3000

## Run 
* `npm install`
* `RESPONSE_MESSAGE=hello npm start`

## Run with Docker
* `docker run -p 3000:3000 -e RESPONSE_MESSAGE='hello' iamnoah4real/saywhat`