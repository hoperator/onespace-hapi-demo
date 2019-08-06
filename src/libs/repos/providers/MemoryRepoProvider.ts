import * as Moment from 'moment';
import * as UUID from 'node-uuid';

import { IRepoEntity } from '../interfaces/IRepoEntity';
import { IRepoProvider } from '../interfaces/IRepoProvider';


export class MemoryRepoProvider<T extends IRepoEntity> implements IRepoProvider<IRepoEntity>  {

  protected database: Map<string, T>;

  constructor() {
    this.database = new Map<string, T>();
  }

  public findById(id: string): Promise<T> {
    return Promise.resolve(this.database.get(id));
  }

  public findByIdAndDelete(id: string): Promise<T> {
    const deletedEntity = this.database.get(id);
    this.database.delete(id);
    return Promise.resolve(deletedEntity);
  }

  public findByIdAndUpdate(id: string, entity: T): Promise<T> {
    const entityToUpdate = this.database.get(id);

    if (entityToUpdate !== undefined) {
      this.database.delete(id);
      entity.updatedDate = Moment.utc().toDate();
      this.database.set(id, entity);
      return Promise.resolve(entity);
    }

    return Promise.resolve(undefined);
  }

  public find(filter: Object, top?: number, skip?: number): Promise<Array<T>> {
    const values = new Array<T>();

    this.database.forEach((value) => {
      values.push(value);
    });

    return Promise.resolve(values);
  }

  public create(entity: T): Promise<T> {
    entity._id = UUID.v4();
    entity.createdDate = Moment.utc().toDate();
    this.database.set(entity._id.toString(), entity);
    return Promise.resolve(entity);
  }
}
