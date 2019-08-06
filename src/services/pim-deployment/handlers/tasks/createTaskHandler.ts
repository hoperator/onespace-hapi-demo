import { resolveWithKey } from '../../../../libs/ioc/DependencyProvider';
import { ITaskRepository, TaskRepositoryKey } from '../../../../repositories/interfaces/ITaskRepository';

export const createTaskHandler = async (request: any, response: any) : Promise<any> => {

  const repo = resolveWithKey<ITaskRepository>(TaskRepositoryKey);
  return await repo.create(request.data);
};
