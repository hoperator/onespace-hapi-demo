
//type IRouteHandler: (request: Hapi.Request, reply: Hapi.IReply) = {}

import { IRequestHandler } from './IRequestHandler';

export interface IRouteParams {
  method?: string | Array<string>;
  path?: string;
  handler?: IRequestHandler<any, any>;
  config: IRouteConfigParams;
}

interface IRouteConfigParams {

  pre?: Array<any>; // - TODO: define this...
  tags?: string | Array<string>;
  description: string;
  validate?: IRouteValidationParams;
  handler?: IRequestHandler<any, any>;
  response?: IRouteResponseParams;
  plugins?: IRoutePluginsParams;
}

interface IRouteValidationParams {
  params?: any; // - TODO: define this....
  query?: any; // - TODO: define this....
}

interface IRouteResponseParams {
  schema?: any; // - TODO: define this....
  status?: any; // - TODO: define this....
}

interface IRoutePluginsParams {
  [key: string]: any; // - TODO: define this....
}
