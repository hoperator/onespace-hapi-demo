import { IRepoEntity } from './IRepoEntity';

export interface IRepo<T extends IRepoEntity> {

  findById(id: string): Promise<T>;

  findByIdAndDelete(id: string): Promise<T>;

  findByIdAndUpdate(id: string, entity: T): Promise<T>;

  find(filter: Object, top?: number, skip?: number): Promise<Array<T>>;

  create(entity: T): Promise<T>;
}
