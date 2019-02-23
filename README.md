# NodeJS-Application-inside-Docker-Container
Making real world projects with Docker by hosting a NodeJS application

# Building our docker container
docker build -t akumar/web_applicaion .

# Running our docker container
docker run -p 8080:8080 akumar/web_application
