//swagger plugin
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

const options = {
    info: {
        title: 'Test API Documentation',
        version: 'xxx',
    },
};

module.exports = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: options
    }
]