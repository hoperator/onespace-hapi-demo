import { Binary } from 'crypto';

export interface IRepoEntity {
  _id: Binary;
  createdDate: Date;
  updatedDate: Date;
}
