import { AwsBucketUploader } from '../../../../libs/aws/AwsBucketUploader';
import { AwsBucketKeys } from '../../../../libs/aws/BucketKeys';
import { resolveWithClass } from '../../../../libs/ioc/DependencyProvider';
import { TaskRepository } from '../../../../repositories/TaskRepository';

export const uploadTaskFileHandler = async (request: any, response: any) : Promise<any> => {

  // - upload file:

  const uploader = new AwsBucketUploader(AwsBucketKeys.OS_PIM_DEPLOYMENT);
  const fileName = await uploader.uploadFile(request.data);

  // - update task:

  const taskId = request.data._id;

  const repo = resolveWithClass(TaskRepository);
  const found = await repo.findById(taskId);
  found.attachedFiles.push(fileName);

  return await repo.findByIdAndUpdate(taskId, found);
};
