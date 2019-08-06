import { inject } from 'inversify';

import { RepoBase } from '../libs/repos/RepoBase';
import { INoteEntity } from '../models/entities/INoteEntity';
import { IRepoFactory, RepoFactoryKey } from '../libs/repos/interfaces/IRepoFactory';
import { INoteRepository } from './interfaces/INoteRepository';

export class NoteRepository extends RepoBase<INoteEntity> implements INoteRepository {

  constructor(@inject(RepoFactoryKey) private repoFactory: IRepoFactory) {
    super(repoFactory, 'Notes');
  }

  public async getPublicNotes() {
    return await this.find({public: true});
  }
}
