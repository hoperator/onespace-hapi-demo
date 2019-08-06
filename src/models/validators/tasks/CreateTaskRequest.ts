import { ITaskEntity } from '../../entities/ITaskEntity';

import { joiString } from '../../../libs/joi/decorators/joiString';
import { joiBool } from '../../../libs/joi/decorators/joiBool';


type TRequiredFields = Omit<ITaskEntity, '_id'|'createdDate'|'updatedDate'>;

export class CreateTaskRequest implements TRequiredFields {

  @joiString({required: true, maxLen: 50})
  name: string;

  @joiString({maxLen: 500})
  description: string;

  @joiBool({required: false})
  completed?: boolean;
}
