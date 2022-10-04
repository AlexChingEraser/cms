//judge is file or directory
const fs = require('fs')

exports.isFile = dir => dir.indexOf('.') !== -1