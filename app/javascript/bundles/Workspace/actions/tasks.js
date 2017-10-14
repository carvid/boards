import api from '../lib/api';
import { FETCH_TASK, UPDATE_TASK } from '../constants';

export const createTask = (title, columnId) => {
  return (dispatch) => {
    return api.post(`/columns/${columnId}/tasks`, { title, position: 1 })
      .then(res => dispatch({ type: FETCH_TASK, payload: { ...res.data, columnId } }));
  };
};

export const updateTask = (columnId, taskId, data) => {
  if (!data.position) {
    data.position = 1;
  }

  return (dispatch) => {
    return api.patch(`/tasks/${taskId}`, data)
      .then(res => dispatch({ type: UPDATE_TASK, payload: { ...res.data, columnId, taskId } }));
  };
};
