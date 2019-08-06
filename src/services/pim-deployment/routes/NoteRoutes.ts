import { IRouteParams } from '../../../libs/hapi/interfaces/IRouteParams';

import { apiRouteConfig } from '../../../libs/hapi/decorators/apiRouteConfig';
import { apiRouteAction } from '../../../libs/hapi/decorators/apiRouteAction';
import { createNoteHandler } from '../handlers/notes/createNoteHandler';
import { updateNoteHandler } from '../handlers/notes/updateNoteHandler';

import { CreateNoteRequest } from '../../../models/validators/notes/CreateNoteRequest';
import { NoteResponse } from '../../../models/validators/notes/NoteResponse';

@apiRouteConfig({
  service: 'pim-deployment',
  pathRoot: '/api/destination/',
  tags: ['api', 'destination'],
})
export class NoteRoutes {

  @apiRouteAction()
  get createNote(): IRouteParams {

    return {
      method: 'PUT',
      path: '/note',

      config: { // - TODO: could remove this extra level of nesting....

        description: 'create new note',
        validate: {
          params: CreateNoteRequest,
        },
        response: {
          schema: NoteResponse,
        },
        handler: createNoteHandler,
      }
    };
  }

  @apiRouteAction({ method: 'POST', path: '/note', simpleUrlTemplate: true, })
  get updateNote(): IRouteParams {

    return {
      config: { // - TODO: could remove this extra level of nesting....

        description: 'update existing note',
        validate: {
          params: CreateNoteRequest,
        },
        response: {
          schema: NoteResponse,
        },
        handler: updateNoteHandler,
      }
    };
  }
}
