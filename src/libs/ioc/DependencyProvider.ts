import { Container, ContainerModule } from 'inversify';
import { INewable } from './INewable';

const container = new Container();


export function loadContainer(): Container {

  const env = process.env.NODE_ENV || 'dev';
  require(`../../config/ioc.${env}.config`)(container);
  return container;
}



export const loadModule = (module: ContainerModule) => {
  return container.load(module);
};

export const resolveWithKey = <T>(key?: string): T => {
  return container.get<T>(key.toString());
};

export const resolveWithClass = <T>(cls: INewable<T>): T => {
  return container.get<T>(cls.name);
};


//export const DependencyProvider = {
//
//  loadModule: (module: ContainerModule) => {
//    return container.load(module);
//  },
//
//  resolveDep: <T>(key: string): T => {
//    return container.get<T>(key.toString());
//  },
//};
