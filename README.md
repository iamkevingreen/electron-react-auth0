# Electron React Auth0
---------
This repo has an in-depth tutorial on Medium that will explain main of the conventions and how it all works.

If you want to just dive that works as well.

`npm install`

### Setup Guide

Duplicate the `config-default.js` to `config.js` and populate your Auth0 credentials. If you are using Google Auth I recommend following the tutorial up top because it has some Electron/React specific implications.

Build the project once with:

`npm run build`

Then run:

`npm run watch` - runs webpack/react

In another terminal window run:

`npm run start` - runs electron

If you have issues or questions please use the issues tracker.

Build your project with:

`npm run package`

### Additional Reading & References

* [Romanschejbal Electron-Blog](https://github.com/romanschejbal/electron-blog)
* [Auth0 React Guide](https://auth0.com/docs/quickstart/spa/react/01-login)
* [Auth0 Electron Quickstart](https://auth0.com/docs/quickstart/native/electron)

### MIT License - Please contribute! :)
