'use strict';
const Hapi = require('@hapi/hapi');
const jwtPlugin = require('hapi-auth-jwt2')

const swaggerPlugin = require('./plugins/swagger')
const routers = require('./routes')
const jwtValidate = require('./plugins/jwt')

const { host, port } = require('./config')

const init = async() => {
    const server = Hapi.server({
        port: port,
        host: host
    });
    
    await server.register([
        jwtPlugin,
        ...swaggerPlugin
    ])
    jwtValidate(server)
    server.route(routers);
    
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();