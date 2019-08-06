import { RouteHarness } from '../../libs/hapi/RouteHarness';
import { NoteRoutes } from './routes/NoteRoutes';
import { TaskRoutes } from './routes/TaskRoutes';

export default new RouteHarness([
  NoteRoutes,
  TaskRoutes,
]);