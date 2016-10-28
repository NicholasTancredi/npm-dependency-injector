module.exports = (
    {dependencies},
    func,
    ...args
) => func.bind(
    null,
    Object.keys(dependencies).reduce((
        reduction,
        dependencyName
    ) => Object.assign(
        reduction, {
            [dependencyName]: require(dependencyName)
        }
    )),
    ...args
)
