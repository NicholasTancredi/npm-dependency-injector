# npm-dependency-injector
## Dependecy injector for pure functional npm modules.
### installation
npm i --save npm-dependency-injector
### usage
```javascript
// ./index.js

var dependencyInjector = require('../index.js');
// would actually be require('npm-dependency-injector')
var packageJSON = require('../package.json');
var exampleFunction = require('./exampleFunction.js');

module.exports = dependencyInjector(
    packageJSON,
    exampleFunction
);

// ./exampleFunction.js
module.exports = function(dependencies) {
    var uuid = dependencies['uuid-v4'];
    return uuid();
};
```
### NOTES:
// Require your package.json file "require('./package.json')" as the first
// argument and your modules root function as the second argument followed
// by any additional arguments.
