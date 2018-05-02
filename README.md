# Vue Webpack Starter Kit
Another Vue starter kit.

### Features
* Webpack 4.
* Vue Router.
* Vuex.
* Dev server with hot reload (uses `webpack-serve`).
* Hashed assets to prevent cache problems.
* Folder structure designed for deploying to Firebase hosting.
* Build report with Webpack Visualizer.

### Folder structure

```bash
├── deploy              # Firebase hosting deploy folder
│    ├── public         # Hosting root folder (where webpack builds)
│    ├── .firebaserc    # Firebase project deploy config
│    ├── firebase.json  # Firebase hosting config
├── environments
├── src
│    ├── assets
│    ├── components
│    ├── mediators      # Application mediators
│    ├── modules        # Application modules
│    |    ├── api       # Example folder
│    |    ├── router    # Global vue router
│    |    ├── store     # Global Vuex store
│    |    └── utils     # Example folder
│    └── App.vue        # Root Vue component
│    └── main.js        # entry point of the Vue application
└── webapack            # Webpack configs
```

### Init
Add your Firebase project name to `deploy/.firebasesrc` and `npm i`.

### Environments
The environment configs are in `/environments`. The config will be available in the `process.env` global object. Since these are added to the Vue app using Webpack's [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) your data has to be stringified. So instead of `"something"` you need to do `'"something"'` or `JSON.stringify("something")`.

By default, the dev server will use the development environment and building will use the production environment. You can select which environment config to use with the variable `ENVIRONMENT=development` in the scripts of `package.json`.

You can create new environments by creating a `webpack/environments/whatever.js` file and then changing `ENVIRONMENT=whatever` in `package.json`.

### NPM Scripts
* `npm run serve` to start the dev server.
* `npm run build` to build a production ready application.
* `npm run build-debug` to build an application for debug with source maps, `console.logs()`, etc.
* `npm run deploy` to deploy to Firebase hosting.
* `npm run view-build-report` to open the build report in your browser.

### Requirements
* Firebase CLI for deploying

### What doesn't work
* Hot reload of external `.scss` files.
