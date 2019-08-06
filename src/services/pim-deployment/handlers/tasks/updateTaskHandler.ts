import { TaskRepository } from '../../../../repositories/TaskRepository';
import { resolveWithClass } from '../../../../libs/ioc/DependencyProvider';

export const updateTaskHandler = async (request: any, response: any) : Promise<any> => {

  const repo = resolveWithClass(TaskRepository);
  return await repo.create(request.data);
};
