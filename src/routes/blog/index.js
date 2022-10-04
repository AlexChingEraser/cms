const handler = require('./handler')

module.exports = [
    {
        method: 'GET',
        path: '/test',
        options: {
            description: 'this is a test route',
            handler: handler,
            tags: ['api', 'Test']
        }
    }
]