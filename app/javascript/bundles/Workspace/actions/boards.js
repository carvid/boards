import api from '../lib/api';
import { FETCH_BOARDS, SET_CURRENT_BOARD } from '../constants';

export const fetchBoards = () => {
  return (dispatch) => {
    return api.get('/boards')
      .then(res => dispatch({ type: FETCH_BOARDS, payload: res.data }));
  }
};

export const setCurrentBoard = (board) => ({
  type: SET_CURRENT_BOARD, payload: { board }
});
