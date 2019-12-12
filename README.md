# Ontology

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Getting project up and running

## Run Container
docker container run --name ontology -dit -v $(pwd):/opt/app -w /opt/app -p 4200:4200 teracy/angular-cli /bin/bash

## Start and attach Container
docker start /ontology
docker attach /ontology

## start server with project
ng serve —-host=0.0.0.0

## open project
Navigate to `http://localhost:4200/`

### Basic Setup Directions

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
