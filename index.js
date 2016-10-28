module.exports = ({dependencies}, func, ...args) =>
    process.env !== 'production' && console.log(
        `${func.name} requires that you install some modules: `,
        `npm install --save ${Object.keys(dependencies).map(package =>
            `${package}@${dependencies[package]}`
        ).join(' ')}`
    )
||
    func.bind(
        null,
        Object.keys(dependencies).reduce((
            reduction, package
        ) => Object.assign(
            reduction, {
                [package]: require(package)
            }
        )),
        ...args
    )


// NOTE:
    // Require your package.json file "require('./package.json')" as the first
    // argument and your modules root function as the second argument followed
    // by any additional arguments.
