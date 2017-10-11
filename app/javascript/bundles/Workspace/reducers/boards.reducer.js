import { combineReducers } from 'redux';
import {
  normalizeBoard,
  normalizeBoards,
  normalizeColumn,
} from './schemas';

import {
  SET_CURRENT_BOARD,
  FETCH_BOARDS,
  FETCH_BOARD,
} from '../constants';

const addBoard = (state, action) => {
  const { payload } = action;
  const { entities: { boards } } = normalizeBoard(payload);
  return {
    ...state,
    ...boards,
  };
}

const addBoards = (state, action) => {
  const { payload } = action;
  const { entities: { boards } } = normalizeBoards(payload);
  return {
    ...state,
    ...boards,
  };
};

const attachColumnToBoard = (state, action) => {
  return state;

  const { payload } = action;
  const { entities: { columns } } = normalizeColumn(payload);
  const board = state[payload.boardId];

  return {
    ...state,
  }
};

const boardsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return addBoards(state, action);
    case FETCH_BOARD:
      return addBoard(state, action);
    case FETCH_COLUMN:
      return attachColumnToBoard(state, action)
    default:
      return state;
  }
};

const currentBoard = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_BOARD:
      const { payload: { board } } = action;
      return board.id;
    default:
      return state;
  }
};

export default combineReducers({
  byId: boardsById,
  current: currentBoard,
});
