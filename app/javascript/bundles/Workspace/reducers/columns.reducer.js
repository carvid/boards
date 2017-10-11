import { combineReducers } from 'redux';

import {
  FETCH_COLUMN,
  FETCH_BOARDS,
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
  console.log(columns, action.payload, state)
  return {
    ...state,
    ...columns,
  };
};

const columnsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return addColumns(state, action);
    case FETCH_COLUMN:
      return addColumn(state, action);
    default:
      return state;
  }
};

export default combineReducers({
  byId: columnsById,
});
