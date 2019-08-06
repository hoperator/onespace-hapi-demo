import { IRepoEntity } from './interfaces/IRepoEntity';
import { IRepo } from './interfaces/IRepo';
import { IRepoProvider } from './interfaces/IRepoProvider';
import { IRepoFactory } from './interfaces/IRepoFactory';

export class RepoBase<T extends IRepoEntity> implements IRepo<T> {

  private readonly repoProvider: IRepoProvider<T>;

  constructor(repoFactory: IRepoFactory, collectionName: string) {
    this.repoProvider = repoFactory.getProvider<T>(collectionName);
  }

  public create(entity: T): Promise<T> {
    return this.repoProvider.create(entity);
  }

  public find(filter: Object, top?: number, skip?: number): Promise<Array<T>> {
    return this.repoProvider.find(filter, top, skip);
  }

  public findById(id: string): Promise<T> {
    return this.repoProvider.findById(id);
  }

  public findByIdAndDelete(id: string): Promise<T> {
    return this.repoProvider.findByIdAndDelete(id);
  }

  public findByIdAndUpdate(id: string, entity: T): Promise<T> {
    return this.repoProvider.findByIdAndUpdate(id, entity);
  }
}
