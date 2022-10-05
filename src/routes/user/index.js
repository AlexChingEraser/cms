const handler = require('./handler')
const validation = require('./validation')

const GROUP = 'user'

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP}/login`,
        handler: handler,
        config: {
            auth: false,
            validate: validation,
            description: 'auth check-in',
            tags: ['api', GROUP]
        }
    }
]