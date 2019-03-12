# OnscaleAngularPoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Setup
1. Install lastest angular CLI using node
2. Import the project and run the command 'npm install' in the root directory to install all plugins.

## Configuration (OPTIONAL)
If you would like to point the service layer to your own docker, modify this line:
baseUrl = 'http://18.222.230.128:8080'; in the file src/app/rest.service.ts

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## OnScale Specific
1. After running the app locally, build the project using:
`ng build --base-href=lib/`
A directory named `dist` is created.

2. Move all files of `dist` (except index.html) to a directory inside `dist` called `lib`. The `dist` folder should contain:
- a folder called `lib`
- an `index.html` file

These files would be copied to the node project before running te docker file as we want to create a single node server for the client and server applications.