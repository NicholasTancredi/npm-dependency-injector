module.exports = ({dependencies}, func, ...args) =>
    process.env !== 'production' && console.log(
        `${func.name} requires that you install the following modules: `,
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
