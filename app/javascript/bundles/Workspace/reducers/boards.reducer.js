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
  const boards = normalizeBoards(payload).result;
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
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  byId: boardsById,
  current: currentBoard,
});