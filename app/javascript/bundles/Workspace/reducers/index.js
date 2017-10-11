import { combineReducers } from 'redux';

import boardsReducer from './boards.reducer';
import columnsReducer from './columns.reducer';
import tasksReducer from './tasks.reducer';

export default combineReducers({
  boards: boardsReducer,
  columns: columnsReducer,
  tasks: tasksReducer,
});
