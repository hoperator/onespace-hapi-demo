import { IRouteParams } from '../../../libs/hapi/interfaces/IRouteParams';

import { apiRouteConfig } from '../../../libs/hapi/decorators/apiRouteConfig';
import { apiRouteAction } from '../../../libs/hapi/decorators/apiRouteAction';
import { createTaskHandler } from '../handlers/tasks/createTaskHandler';
import { updateTaskHandler } from '../handlers/tasks/updateTaskHandler';
import { uploadTaskFileHandler } from '../handlers/tasks/uploadTaskFileHandler';

import { CreateTaskRequest } from '../../../models/validators/tasks/CreateTaskRequest';
import { TaskResponse } from '../../../models/validators/tasks/TaskResponse';
import { UploadFileRequest } from '../../../models/validators/files/UploadFileRequest';

@apiRouteConfig({
  service: 'pim-deployment',
  pathRoot: '/api/destination/',
  tags: ['api', 'destination'],
})
export class TaskRoutes {

  @apiRouteAction()
  get createTask(): IRouteParams {

    return {
      method: 'PUT',
      path: '/task',

      config: { // - TODO: could remove this extra level of nesting....

        description: 'create new task',
        validate: {
          params: CreateTaskRequest,
        },
        response: {
          schema: TaskResponse,
        },
        handler: createTaskHandler,
      }
    };
  }

  @apiRouteAction({ method: 'POST', path: '/task', simpleUrlTemplate: true, })
  get updateTask(): IRouteParams {

    return {
      config: { // - TODO: could remove this extra level of nesting....

        description: 'update existing task',
        validate: {
          params: CreateTaskRequest,
        },
        response: {
          schema: TaskResponse,
        },
        handler: updateTaskHandler,
      }
    };
  }

  @apiRouteAction({ method: 'POST', path: '/task/upload', simpleUrlTemplate: true, })
  get uploadTaskAttachment(): IRouteParams {

    return {
      config: { // - TODO: could remove this extra level of nesting....

        description: 'upload task attachment',
        validate: {
          params: UploadFileRequest,
        },
        response: {
          schema: TaskResponse,
        },
        handler: uploadTaskFileHandler,
      }
    };
  }
}
