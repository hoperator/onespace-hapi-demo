
import { Container } from 'inversify';
import { DependencyBuilder } from '../libs/ioc/DependencyBuilder';
import { IRepoFactory, RepoFactoryKey } from '../libs/repos/interfaces/IRepoFactory';
import { MongoRepoFactory } from '../libs/repos/factories/MongoRepoFactory';
import { IRepoConfig, RepoConfigKey } from '../libs/repos/interfaces/IRepoConfig';
import { TaskRepository } from '../repositories/TaskRepository';
import { NoteRepository } from '../repositories/NoteRepository';

import { registerAwsBuckets } from './shared/registerAwsBuckets';

export default function(container: Container) {

  const {addSingleton, addTransient, addConstant} = new DependencyBuilder(container);


  // - repository setup:

  const repoConfig: IRepoConfig = {connectionString: 'mongodb://localhost/hapi-cleanup-demo'};

  addConstant<IRepoConfig>(repoConfig, RepoConfigKey);
  addSingleton<IRepoFactory>(MongoRepoFactory, RepoFactoryKey);

  addTransient<TaskRepository>(TaskRepository);
  addTransient<NoteRepository>(NoteRepository);

  // - aws setup:

  registerAwsBuckets(container);
}
