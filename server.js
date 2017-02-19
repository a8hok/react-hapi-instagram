// Module dependency.
const Hapi = require( 'hapi' );

// Configuration settings.
const config = require( './config.js' );

const server = new Hapi.Server();

// server connection.
server.connection( { 
	port: config.port, 
	host: config.host 
} );

// start Hapi server.
server.start( (err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
} );