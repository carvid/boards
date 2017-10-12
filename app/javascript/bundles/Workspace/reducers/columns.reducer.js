import { combineReducers } from 'redux';

import {
  FETCH_COLUMN,
  FETCH_BOARDS,
  FETCH_TASK,
} from '../constants';

import { normalizeColumn, normalizeBoards } from './schemas';

const addColumn = (state, action) => {
  const { payload } = action;
  const normalized = normalizeColumn(payload);
  const { entities: { columns } } = normalized;
  return {
    ...state,
    ...columns,
  };
}

const addColumns = (state, action) => {
  const { payload } = action;
  const { entities: { columns } } = normalizeBoards(payload);

  return {
    ...state,
    ...columns,
  };
};

const attachTaskToColumn = (state, action) => {
  const { payload } = action;
  const column = state[payload.columnId];

  return {
    ...state,
    [column.id]: { ...column, tasks: [ ...column.tasks, payload.id ] },
  };
};


const columnsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return addColumns(state, action);
    case FETCH_COLUMN:
      return addColumn(state, action);
    case FETCH_TASK:
      return attachTaskToColumn(state, action);
    default:
      return state;
  }
};

export default combineReducers({
  byId: columnsById,
});
