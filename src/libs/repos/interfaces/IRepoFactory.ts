import { IRepoEntity } from './IRepoEntity';
import { IRepoProvider } from './IRepoProvider';

export const RepoFactoryKey = 'IRepoFactory';

export interface IRepoFactory {
  getProvider<T extends IRepoEntity>(collectionName: string): IRepoProvider<T>;
}
