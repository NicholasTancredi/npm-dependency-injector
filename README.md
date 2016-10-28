# npm-dependency-injector
## Dependecy injector for pure functional npm modules.
### installation
npm install --save npm-dependency-injector
### usage
#### NOTE: node_modules/uuid-v4 is only for the example.
Require your ```package.json``` file as the first
argument and your modules root function as the second argument followed
by any additional arguments.
#### ./index.js
```javascript
var dependencyInjector = require('npm-dependency-injector'),
    packageJSON = require('./package.json'),
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
