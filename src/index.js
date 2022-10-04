'use strict';
const Hapi = require('@hapi/hapi');
const routers = require('./routes')
const swaggerPlugin = require('./plugins/swagger')

const init = async() => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    
    server.route(routers);

    await server.register(swaggerPlugin)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();