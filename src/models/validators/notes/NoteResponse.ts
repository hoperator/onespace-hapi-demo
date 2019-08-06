import { Binary } from 'crypto';
import { INoteEntity } from '../../entities/INoteEntity';

import { joiString } from '../../../libs/joi/decorators/joiString';
import { joiBool } from '../../../libs/joi/decorators/joiBool';
import { joiBinary } from '../../../libs/joi/decorators/joiBinary';


type TRequiredFields = Omit<INoteEntity, 'createdDate'|'updatedDate'>;

export class NoteResponse implements TRequiredFields {

  @joiBinary({required: true})
  _id: Binary;

  @joiString({required: true, maxLen: 50})
  title: string;

  @joiString({maxLen: 500})
  body: string;

  @joiBool({required: false})
  public?: boolean;
}
