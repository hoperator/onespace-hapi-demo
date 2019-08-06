import { Binary } from 'crypto';
import { ITaskEntity } from '../../entities/ITaskEntity';

import { joiString } from '../../../libs/joi/decorators/joiString';
import { joiBool } from '../../../libs/joi/decorators/joiBool';
import { joiBinary } from '../../../libs/joi/decorators/joiBinary';


type TRequiredFields = Omit<ITaskEntity, 'createdDate'|'updatedDate'>;

export class UpdateTaskRequest implements TRequiredFields {

  @joiBinary({required: true})
  _id: Binary;

  @joiString({required: true, maxLen: 50})
  name: string;

  @joiString({maxLen: 500})
  description: string;

  @joiBool({required: false})
  completed?: boolean;
}
