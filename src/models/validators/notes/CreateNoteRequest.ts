import { INoteEntity } from '../../entities/INoteEntity';

import { joiString } from '../../../libs/joi/decorators/joiString';
import { joiBool } from '../../../libs/joi/decorators/joiBool';


type TRequiredFields = Omit<INoteEntity, '_id'|'createdDate'|'updatedDate'>;

export class CreateNoteRequest implements TRequiredFields {

  @joiString({required: true, maxLen: 50})
  title: string;

  @joiString({maxLen: 500})
  body: string;

  @joiBool({required: false})
  public?: boolean;
}
