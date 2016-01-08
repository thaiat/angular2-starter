[![Build Status](https://travis-ci.org/thaiat/angular2-starter.svg?branch=master)](https://travis-ci.org/thaiat/angular2-starter)
## Description
Starter project with angular2 and webpack

## Commands
`npm run clean`: clean dist folder

`npm run build`: build the app
You can pass a different TARGET or MODE using the following command:
```sh
[TARGET=newtarget MODE=dev] npm run build
```

`npm run webpack-server`:  compile and open a the webpack reload browser
You can pass a different TARGET or MODE using the following command:
```sh
[TARGET=newtarget MODE=dev] npm run webpack-server
```

`npm run browsersync`:  compile and open a live reload browser
You can pass a different TARGET or MODE using the following command:
```sh
[TARGET=newtarget MODE=dev] npm run browsersync
```

`npm run lint`:  Run lint
```sh
npm run lint
```

`npm test`:  Run unit tests
```sh
npm test
```

## TODOS
* https://www.npmjs.com/package/html-webpack-plugin - DONE    
* Protractor    

## NOTES
When importing a style as a string use the `.toString()` method
```ts
@Component({
    selector: 'app',
    styles: [require('./app.component.scss').toString()],
    providers: [HeroService],
    template: require('./app.component.html')
})
```

