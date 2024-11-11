## Kluver notes

* Questions I Still have
   - 404
      - according to https://discuss.emberjs.com/t/how-to-make-a-404-router/11349/2 (which is out of date) It's a special route that you'll want to make sure is at the end of the router. 
      - Confirmed here: https://discuss.emberjs.com/t/how-to-make-a-404-router/11349/2
      - Order doesn't seem to matter here...
      - deliberate 404 seems to be tied to loading and error substates...
      - seems like you've got two options with these -- states or hooks.
      - this only kind of worked...
          @action
          error(error, transition) {
            console.log(error)
            this.router.replaceWith("notfound")
            return false
          }
      - The key of the above --t hrow an error and catch it with a transition. The false means "I got it don't propigate" the router.replaceWith only works for _real_ routes...
      - What worked better is making a new "route" (skkipping the router) X_error
   - How best to do login.
        - obviously the answer is a service at the BE. but what's _before_ that?
        - ok let's test this now.
        - Oh fun. "FirebaseUI is NOT currently compatible with modular  library...Then I guess we don't want to use this.
        - Docs were hard to find... https://modularfirebase.web.app/reference/auth/
        - OK. now we're in busines -- I had a typo. Services can 100% have actions that are direct tracked...
        - authStateReady promise -- might be worth using...


# ember-quickstart

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd ember-quickstart`
- `npm install`

## Running / Development

- `npm run start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `npm run test`
- `npm run test:ember -- --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `npm exec ember build` (development)
- `npm run build` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://cli.emberjs.com/release/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
