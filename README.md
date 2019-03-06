# NodeJS-Application-inside-Docker-Container
Making real world projects with Docker by hosting a NodeJS application
1. Create Node JS web app
2. Create a Dockerfile
3. Build image from dockerfile
4. Run image as container
5. Connect to web app from a browser 

# Building our docker container
docker build -t akumar/web_applicaion .

# Running our docker container
docker run -p 8080:8080 akumar/web_application

Setting up an explicit port mapping. The site is hosted on localhost. For windows, do a docker-machine ls. The default running machine indicates the URL for the launched application. For this application, the URL is http://192.168.99.100:<port#>. Here, the port# used in index.js is 8080.

# To run a shell inside the container
docker exec -it {container ID} sh
