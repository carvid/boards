import api from '../lib/api';
import { FETCH_TASK } from '../constants';

export const createTask = (title, columnId) => {
  return (dispatch) => {
    return api.post(`/columns/${columnId}/tasks`, { title, position: 1 })
      .then(res => dispatch({ type: FETCH_TASK, payload: { ...res.data, columnId } }));
  };
};
