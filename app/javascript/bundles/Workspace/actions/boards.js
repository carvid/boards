import api from '../lib/api';
import { FETCH_BOARDS, BOARD_SELECT } from '../constants';

export const fetchBoards = () => {
  return (dispatch) => {
    return api.get('/boards')
      .then(res => dispatch({ type: FETCH_BOARDS, payload: res.data }));
  }
};

export const onBoardSelect = () => ({
  type: BOARD_SELECT,
});
