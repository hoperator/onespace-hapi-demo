import { IRepoEntity } from './IRepoEntity';

export const RepoProviderKey = 'IRepoProvider';

export interface IRepoProvider<T extends IRepoEntity> {

  //getCollectionName(): string;
  //getCollection(url: string): Promise<MongoDb.Collection>;

  findById(id: string): Promise<T>;

  findByIdAndDelete(id: string): Promise<any>;

  findByIdAndUpdate(id: string, entity: T): Promise<T>;

  find(filter: Object, top?: number, skip?: number): Promise<Array<T>>;

  create(entity: T): Promise<T>;
}
