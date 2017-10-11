import { combineReducers } from 'redux';
import {
  normalizeBoard,
  normalizeBoards,
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

const boardsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return addBoards(state, action);
    case FETCH_BOARD:
      return addBoard(state, action);
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
