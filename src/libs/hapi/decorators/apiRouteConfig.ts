
interface IApiRouteConfigParams {
  service: string;
  pathRoot: string;
  tags?: Array<string>;
}

export function apiRouteConfig(params: IApiRouteConfigParams) {
  return function(constructor: Function) {
    // - TODO: fill this out...
  };
}
