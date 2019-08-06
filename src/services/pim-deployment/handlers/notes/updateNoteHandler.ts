import { NoteRepository } from '../../../../repositories/NoteRepository';
import { resolveWithClass } from '../../../../libs/ioc/DependencyProvider';

export const updateNoteHandler = async (request: any, response: any) : Promise<any> => {

  const repo = resolveWithClass(NoteRepository);
  return await repo.create(request.data);
};
