import api from '../lib/api';
import {
  FETCH_COLUMN,
} from '../constants';

export const createColumn = (boardId, title) => {
  return (dispatch) => {
    return api.post(`/boards/${boardId}/columns`, { title, position: 1 })
      .then(res => dispatch({ type: FETCH_COLUMN, payload: { ...res.data, boardId } }));
  };
};
