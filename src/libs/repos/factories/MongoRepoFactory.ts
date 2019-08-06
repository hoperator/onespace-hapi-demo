import { IRepoConfig, RepoConfigKey } from '../interfaces/IRepoConfig';
import { IRepoProvider } from '../interfaces/IRepoProvider';
import { IRepoEntity } from '../interfaces/IRepoEntity';
import { IRepoFactory } from '../interfaces/IRepoFactory';
import { MongoRepoProvider } from '../providers/MongoRepoProvider';
import { inject } from 'inversify';

export class MongoRepoFactory implements IRepoFactory {

  constructor(
    @inject(RepoConfigKey) private repoConfig: IRepoConfig
  ) {}

  getProvider<T extends IRepoEntity>(collectionName: string): IRepoProvider<T> {
    return new MongoRepoProvider<T>(this.repoConfig, collectionName);
  }
}
