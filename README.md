# PagesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Deployment to GH-Pages

Run `npm install -g angular-cli-ghpages` once on your system to install the ghpages angular cli

Run `ng build --prod --base-href "https://scalcam.github.io/pages-app/"` to build project into the dist folder

Run `npx angular-cli-ghpages --dir=dist/pages-app` to deploy the app from the dist folder into a gh-pages branch

Then wait for Settings > GitHub Pages to say that the page has been built

I added a script to my package.json to run the above commands. `npm run deploy`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
