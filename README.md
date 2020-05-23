# Functional Programming with JavaScript
## Simple counter app

Based on the course "Functional Programming for Beginners with JavaScript by James Moore" https://github.com/knowthen/fpjs

## Libraries used
- Yarn: as package manager
- HyperScript & HyperScript-Helper: To return HTML from pure functions in order to build UI. https://github.com/hyperhype/hyperscript
- VirtualDom: To help rendering only the difference between the old view and the current view, rather than refreshing the whole page with every change of the app state. https://github.com/Matt-Esch/virtual-dom
- Webpack as JS bundle
- Babel as ES2015+ transpiler
- Tachyons: for css

## Architecture

The architecture followed is very similar to Elm-lang architecture and consist on the following components

- App function that host and tightly controls all the application side-effects. This function also contains the dispatch function that triggers actions or messages to update the app state.
- Model or application state. A JS object literal representing the whole app state.
- View: A number of pure functions that receive the dispatch function and the model and returns some amount of HTML to be rendered on the page. The dispatch function is execute through event listeners to various HTML elements.
- Update. A pure function that returns a new state for every action received via dispatch.

