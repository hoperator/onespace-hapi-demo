
import { Container } from 'inversify';
import { INewable } from './INewable';

export class DependencyBuilder {

	constructor(private container: Container) { }

	addSingleton = <T>(cls : INewable<T>, key : string) => {

		if (!this.container.isBound(key)) {
      this.container.bind<T>(key).to(cls).inSingletonScope();
		}
	}

	addTransient = <T>(cls : INewable<T>, key : string = undefined) => {
		if (key === undefined) { key = cls.name; }
    if (!this.container.isBound(key)) {
      this.container.bind<T>(key).to(cls).inTransientScope();
    }
	}

	addConstant = <T>(obj : any, key : string) => {
    if (!this.container.isBound(key)) {
      this.container.bind<T>(key).toConstantValue(obj);
    }
	}
}
