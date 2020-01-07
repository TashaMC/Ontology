# Ontology

This project originated from [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## NPM: Getting project up and running
npm start

## Docker: Getting project up and running

# Run Container
docker container run --name ontology -dit -v $(pwd):/opt/app -w /opt/app -p 4200:4200 teracy/angular-cli /bin/bash

# Start and attach Container
docker start /ontology
docker attach /ontology

# Start server with project
ng serve —-host=0.0.0.0

# Open project
Navigate to `http://localhost:4200/`


## other 
# Check files open on Port
lsof -i :4200

## Run Fake Server on docker / JSON
docker run  \           
      -p 3000:3000  -v `pwd`:/data  \
      williamyeh/json-server        \
      --watch ontology/dist/server/cancer.json
