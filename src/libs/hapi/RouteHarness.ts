import { INewable } from '../ioc/INewable';
import { Server, ServerRoute } from 'hapi';

export class RouteHarness {

  constructor(private routeClasses: Array<INewable<any>>) {}

  mountServerRoutes(server: Server) {

    const serverRoutes: Array<ServerRoute> = this.routeClasses.map((routeClass) => {
      const instance = new routeClass();
      // - TODO: inspect instance top-level config (tags, serviceRoot, etc.)
      // - TODO: inspect property-level configs
      // - TODO: inspect validation classes and convert to joi models
      // - TODO: convert to route-config for server.route()
      return {} as ServerRoute;
    });

    server.route(serverRoutes);
  }

  parseGatewayServices() {
    // - TODO: map route-configs to shape of simpleapigateway/services/pim-deployment....
  }

  parseGatewayRoutes() {
    // - TODO: map route-configs to shape of simpleapigateway/routes/pim-deployment....
  }

  parseGatewayApiKeys() {
    // - TODO: map route-configs to shape of simpleapigateway/api-key-config....
  }

  buildPostmanCollections() {
    // - TODO: map route-configs to shape of simpleapigateway/api-key-config....
  }
}