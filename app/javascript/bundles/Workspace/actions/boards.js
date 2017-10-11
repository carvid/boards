import api from '../lib/api';
import {
  FETCH_BOARD,
  FETCH_BOARDS,
  BOARD_SELECT,
  SET_CURRENT_BOARD,
} from '../constants';

export const createBoard = (title) => {
  return (dispatch) => {
    return api.post('/boards', { title })
      .then(res => dispatch({ type: FETCH_BOARD, payload: res.data }));
  };
};

export const fetchBoards = () => {
  return (dispatch) => {
    return api.get('/boards')
      .then(res => dispatch({ type: FETCH_BOARDS, payload: res.data }));
  }
};

export const setCurrentBoard = (board) => ({
  type: SET_CURRENT_BOARD, payload: { board }
});
