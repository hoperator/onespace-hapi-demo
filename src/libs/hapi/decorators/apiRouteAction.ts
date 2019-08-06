
interface IApiRouteActionParams {
  method: string;
  path: string;
  tags?: Array<string>;
  simpleUrlTemplate?: boolean;
}

export function apiRouteAction(params?: IApiRouteActionParams) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    //descriptor.enumerable = value;
  };
}
