import { IRepoEntity } from '../../libs/repos/interfaces/IRepoEntity';

export interface INoteEntity extends IRepoEntity {
  title: string;
  body: string;
  public?: boolean;
}
