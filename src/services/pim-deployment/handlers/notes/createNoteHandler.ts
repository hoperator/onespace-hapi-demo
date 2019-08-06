import { resolveWithKey } from '../../../../libs/ioc/DependencyProvider';
import { INoteRepository, NoteRepositoryKey } from '../../../../repositories/interfaces/INoteRepository';

export const createNoteHandler = async (request: any, response: any) : Promise<any> => {

  const repo = resolveWithKey<INoteRepository>(NoteRepositoryKey);
  return await repo.create(request.data);
};
