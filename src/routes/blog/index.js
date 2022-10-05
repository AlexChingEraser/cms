const handler = require('./handler')

const GROUP = 'blog'

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP}`,
        handler: handler,
        config: {
            auth: false,
            description: 'get all blogs',
            tags: ['api', GROUP]
        }
    }
]