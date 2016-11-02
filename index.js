const condition = _return => ({
    [`is not production environment`]: process && process.env !== 'production' && _return,
})

const handleError = condition[`is not production environment`](console.error)
const handlePackageInfoMessage = dependencies => package => `${package}@${dependencies[package]}`

module.exports = ({dependencies}, func, ...args) =>
    handleError(
        `${func.name} requires that you install the following modules: `,
        `npm install --save ${Object.keys(dependencies).map(handlePackageInfoMessage(dependencies)).join(' ')}`
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
