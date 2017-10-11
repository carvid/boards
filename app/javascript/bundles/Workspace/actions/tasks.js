import api from '../lib/api';
import { FETCH_TASKS, FETCH_TASK } from '../constants';

export const createTask = (title, column_id) => {
  return (dispatch) => {
    return api.post('/columns/'+column_id+'/tasks', { title })
      .then(res => dispatch({ type: FETCH_TASK, payload: res.data }));
  };
};