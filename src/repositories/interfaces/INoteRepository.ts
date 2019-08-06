import { IRepo } from '../../libs/repos/interfaces/IRepo';
import { INoteEntity } from '../../models/entities/INoteEntity';

export const NoteRepositoryKey = 'INoteRepository';

export interface INoteRepository extends IRepo<INoteEntity> {
  getPublicNotes() : Promise<Array<INoteEntity>>;
}