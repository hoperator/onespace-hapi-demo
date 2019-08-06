import { IRepoProvider } from '../interfaces/IRepoProvider';
import { IRepoEntity } from '../interfaces/IRepoEntity';
import { IRepoFactory } from '../interfaces/IRepoFactory';
import { MemoryRepoProvider } from '../providers/MemoryRepoProvider';

export class MemoryRepoFactory implements IRepoFactory {

  getProvider<T extends IRepoEntity>(collectionName: string): IRepoProvider<T> {
    return new MemoryRepoProvider<T>();
  }
}
