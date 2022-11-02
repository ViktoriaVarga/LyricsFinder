# LyricsFinder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

This is a demo project to demonstrate my ability to work with Angular using Ngrx an RxJS.
It contains the following features: 

1. A public API that takes two parameters: 
(https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime) 
PARAMETERS :
Artist: ex. Coldplay, Lady Gaga, Iron Maiden, etc
Title: ex. Adventure of a Lifetime, Bad Romance, Run to the Hills, etc

2. Reactive form for the input 

3. NgRx :

The state of the application is  handled by the NgRx store
When pressing the 'Show lyrics' button, an action is dispatched
In the effects, listening to this action and calling the API
If success, the state in the reducer is updated 
If error, error message is shown on the page.
Ngrx selectors are used (Observables) to get the data from the app's state

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
