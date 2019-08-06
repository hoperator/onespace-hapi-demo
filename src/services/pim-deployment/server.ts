import { Server as HapiServer, ServerOptions as Options } from 'hapi';
import { loadContainer } from '../../libs/ioc/DependencyProvider';

import router from './router';


// - https://github.com/dialexa/hapi-inversify-typescript

// - TODO: if this gets refactored for multiple service reuse, rename to HapiServer (and remove the as-rename in the import)

export default class Server {

    private server: HapiServer;

    constructor (options: Options) {
        this.server = new HapiServer(options);
    }

    // - TODO: if this gets refactored for multiple service reuse, pass in router and container via init() params..

    public async init(): Promise<void> {

        // Decorate the request with the container
        loadContainer();

        // Register plugins
        //await this.server.register(plugins);

        // Initialize the routes
        router.mountServerRoutes(this.server);
    }

    public async start(): Promise<void> {
        await this.server.start();
        console.log('🚀 Server started at: ', this.server.info.port);
    }
}
