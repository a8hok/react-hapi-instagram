'use strict';

// Module dependency.
const Hapi = require('hapi');

// Configuration settings.
const config = require('./server/config.js');

// Server connections.
const server = new Hapi.Server();
server.connection({
    port: config.PORT,
    host: config.HOST,
    routes: { cors: true } 
});

// Routing files.
const routesHandler = require('./server/routes/routes.js');
server.route({
    method: 'GET',
    path: '/login/{user}',
    handler: routesHandler.getInstaSelfUserDeatils,
});



// start Hapi server.
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
