# DOCKER_SETUP
Uses docker-compose to create
 `myapp container` a nodejs server on port 8001 local and 3000 inside the container
 `database container` mysql server on port 8010 local and 3306 inside the container
 `phpmyadmin container` phpmyadmin on port 8081 local and 80 inside the container
 
database is mounted with two directories: 
  - one is db : files from here an be accessed from inside the container ex: when you want to dump some .sql files
  - the other is mysql
