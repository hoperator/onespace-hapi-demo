//import Server from './server';
//
//console.log(`Running environment ${process.env.NODE_ENV || 'dev'}`);
//
////Starting Application Server
//Server.start(() => {
//    console.log('Server running at:', Server.info.uri);
//});


import options from './options';
import Server from './server';

async function start() {
    const server = new Server(options);

    await server.init();
    await server.start();
}

setImmediate(() => start());