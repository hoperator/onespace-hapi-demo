import * as MongoDb from 'mongodb';
import * as Moment from 'moment';
import * as UUID from 'node-uuid';

import { IRepoProvider } from '../interfaces/IRepoProvider';
import { IRepoConfig } from '../interfaces/IRepoConfig';
import { IRepoEntity } from '../interfaces/IRepoEntity';


export class MongoRepoProvider<T extends IRepoEntity> implements IRepoProvider<T>  {

  protected collection: Promise<MongoDb.Collection>;

  public constructor(repoConfig: IRepoConfig, private collectionName: string) {
    this.collection = this.getCollection(repoConfig.connectionString);
  }

  //protected abstract getCollectionName(): string;

  private getCollection(url: string): Promise<MongoDb.Collection> {
    return MongoDb.MongoClient.connect(url).then((db: MongoDb.Db) => {
      return db.collection(this.collectionName);
    });
  }

  public findById(id: string): Promise<T> {
    return this.collection.then((collection: any) => {
      return collection.findOne({_id: id}).then((result) => {
        return result;
      });
    });
  }

  public findByIdAndDelete(id: string): Promise<any> {
    return this.collection.then((collection: MongoDb.Collection) => {
      return collection.deleteOne({ _id: id }).then((result) => {
        return result;
      });
    });
  }

  public findByIdAndUpdate(id: string, entity: T): Promise<T> {
    return this.collection.then((collection: MongoDb.Collection) => {
      entity.updatedDate = Moment.utc().toDate();
      return collection.updateOne({ _id: id }, entity).then((result) => {
        return entity;
      });
    });
  }

  public find(filter: Object, top?: number, skip?: number): Promise<Array<T>> {
    return this.collection.then((collection: MongoDb.Collection) => {
      return collection.find(filter).limit(top).skip(skip).toArray();
    });
  }

  public create(entity: T): Promise<T> {
    entity._id = UUID.v4();
    return this.collection.then((collection: MongoDb.Collection) => {
      entity.createdDate = Moment.utc().toDate();
      return collection.insertOne(entity).then((result) => {
        return entity;
      });
    });
  }
}
