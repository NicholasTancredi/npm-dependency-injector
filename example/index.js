var dependencyInjector = require('../index.js');
// would actually be require('npm-dependency-injector')
var packageJSON = require('../package.json');
var exampleFunction = require('./exampleFunction.js');

module.exports = dependencyInjector(
    packageJSON,
    exampleFunction
);
