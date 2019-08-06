import { IRepo } from '../../libs/repos/interfaces/IRepo';
import { ITaskEntity } from '../../models/entities/ITaskEntity';

export const TaskRepositoryKey = 'ITaskRepository';

export interface ITaskRepository extends IRepo<ITaskEntity> {
  getCompletedTasks() : Promise<Array<ITaskEntity>>;
}