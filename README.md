# Angular with Module Federation

> Monorepo with two apps to show how setup Angular app to work with Webpack 5 Module Federation.

## How it Work's

This project has two Angular applications, **App01** and **Shell** (here we import all remote modules), at app01 we export a module
called HelloModule (just Module at `webpack.config.js`). The App called _Shell_ import the module Hello from _App01_ and
load into your route system.

To see how those applications are setup, see `angular.json` file, and all `webpack.config.js` file into app01 and shell folder.

## Before running all apps

Before run all apps, install all dependecies with **[Yarn](http://yarnpkg.org/)**.

## Running App01

Run `yarn start:app01`

## Running Shell Application

After run app01, run `yarn start:shell`.

## Used libs

- Angular 11 (beta)
- Webpack 5
- ngx-build-plus (To extends Angular CLI build process)

## License

MIT @ Raí Siqueira
