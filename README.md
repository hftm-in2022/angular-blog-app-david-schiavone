# BlogApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Code Quality Tools

### ESLint

ESLint is in use for static code analysis. You can configure it in eslint.config.js[eslint.config.js](eslint.config.js)

### Prettier

Prettier is in use to have the same code format in all files. It is configured in package.json[package.json](package.json)

### CommitLint

CommitLint is in use to make sure all commit messages are in the conventional commit format.

### lint-staged

lint-staged makes it possible to apply linters and formatting tools only to the changed files, which speeds up the commit process.

### Husky

Husky makes it possible to easily manage and execute Git hooks, e.g. to automatically execute Prettier and ESLint before each commit.

## Azure Deployments

Every commit in the main is automatically deployed to azure.
This is configured in .github/workflows/[azure-static-web-apps-happy-bay-0a2615703.yml](.github/workflows/azure-static-web-apps-happy-bay-0a2615703.yml)

## CI/CD

The following ci/cd pipelines exist

- Build: The project is to be built.
- Testing: Carry out all unit tests and integration tests.
- Automated ng update: The pipeline should automatically check whether Angular or other dependencies can be updated and apply these updates.

You can find more information about the setup in the following file: [SETUP.md](SETUP.md)

## Directory structure

The code is found in the [app](src/app) directory.
In the [core](src/app/core) directory you can find all core functionalities.
In the [features](src/app/features) directory are the pages and other components.
In the [model](src/app/model) directory are ts models which are used in the project.
In the [services](src/app/services) you can find the services of the project

## State management

State management is implemented with the redux-pattern.
The code for the state management is in the [redux](src/app/services/redux) directory.
