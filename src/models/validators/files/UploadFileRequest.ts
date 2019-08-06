import { Binary } from 'crypto';

import { joiString } from '../../../libs/joi/decorators/joiString';
import { joiBinary } from '../../../libs/joi/decorators/joiBinary';


export class UploadFileRequest {

  @joiBinary({required: true})
  _id: Binary;

  @joiString({required: true, maxLen: 50})
  fileName: string;

  @joiBinary({required: true, maxSize: 1000000})
  fileBytes: Array<Binary>;
}
