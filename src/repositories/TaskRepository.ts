import { inject } from 'inversify';

import { RepoBase } from '../libs/repos/RepoBase';
import { ITaskEntity } from '../models/entities/ITaskEntity';
import { IRepoFactory, RepoFactoryKey } from '../libs/repos/interfaces/IRepoFactory';
import { ITaskRepository } from './interfaces/ITaskRepository';

export class TaskRepository extends RepoBase<ITaskEntity> implements ITaskRepository {

  constructor(@inject(RepoFactoryKey) private repoFactory: IRepoFactory) {
    super(repoFactory, 'Tasks');
  }

  public async getCompletedTasks() {
    return await this.find({completed: true});
  }
}
