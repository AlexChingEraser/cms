const fs = require('fs')
const path = require('path')
const { isFile } = require('../common/utils/file')

const resolve = (...dir) => path.resolve(__dirname, ...dir)

let ROUTERS = []

for (let item of fs.readdirSync(__dirname)) {
    if (isFile(item)) continue
    const router = fs.readdirSync(resolve(item))
    const route = router.find(name => name.indexOf('index') !== -1)
    ROUTERS.push(...require(resolve(item, route)))
}

module.exports = ROUTERS