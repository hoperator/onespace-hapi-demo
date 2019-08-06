import { IRepoEntity } from '../../libs/repos/interfaces/IRepoEntity';

export interface ITaskEntity extends IRepoEntity {
  name: string;
  description: string;
  completed?: boolean;
  attachedFiles?: Array<string>;
}
