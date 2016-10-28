module.exports = ({dependencies}, func, ...args) => func.bind(null,
    Object.keys(dependencies).reduce((
        reduction, dependencyName
    ) => Object.assign(
        reduction, {
            [dependencyName]: require(dependencyName)
        }
    )), ...args)

// NOTE:
    // Require your package.json file "require('./package.json')" as the first
    // argument and your modules root function as the second argument followed
    // by any additional arguments.
