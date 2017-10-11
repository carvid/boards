import { combineReducers } from 'redux';
import {
  normalizeBoard,
  normalizeBoards,
} from './schemas';

import {
  SET_CURRENT_BOARD,
  FETCH_BOARDS,
} from '../constants';

const addBoards = (state, action) => {
  const { payload } = action;
  const { entities: { boards } } = normalizeBoards(payload);
  return {
    ...state,
    ...boards,
  };
};

const boardsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return addBoards(state, action);
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
