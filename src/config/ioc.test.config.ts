
import { Container } from 'inversify';
import { DependencyBuilder } from '../libs/ioc/DependencyBuilder';
import { IRepoFactory, RepoFactoryKey } from '../libs/repos/interfaces/IRepoFactory';
import { MemoryRepoFactory } from '../libs/repos/factories/MemoryRepoFactory';
import { TaskRepository } from '../repositories/TaskRepository';
import { NoteRepository } from '../repositories/NoteRepository';
import { registerAwsBuckets } from './shared/registerAwsBuckets';

export default function(container: Container) {

  const { addSingleton, addTransient } = new DependencyBuilder(container);

  // - repository setup:

  addSingleton<IRepoFactory>(MemoryRepoFactory, RepoFactoryKey);

  addTransient<TaskRepository>(TaskRepository);
  addTransient<NoteRepository>(NoteRepository);

  // - aws setup:

  registerAwsBuckets(container);
}
