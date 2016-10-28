# npm-dependency-injector
## Dependecy injector for pure functional npm modules.
### installation
npm i --save npm-dependency-injector
### usage
#### ./index.js
```javascript
var dependencyInjector = require('npm-dependency-injector'),
    packageJSON = require('../package.json'),
    exampleFunction = require('./exampleFunction.js');

module.exports = dependencyInjector(
    packageJSON,
    exampleFunction
);
```
#### ./exampleFunction.js
```javascript
module.exports = function(dependencies) {
    var uuid = dependencies['uuid-v4'];
    return uuid();
};
```
### NOTES:
// Require your package.json file "require('./package.json')" as the first
// argument and your modules root function as the second argument followed
// by any additional arguments.
