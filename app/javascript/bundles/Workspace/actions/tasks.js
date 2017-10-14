import api from '../lib/api';
import { FETCH_TASK, UPDATE_TASK, REMOVE_TASK } from '../constants';

export const createTask = (title, columnId) => {
  return (dispatch) => {
    return api.post(`/columns/${columnId}/tasks`, { title, position: 1 })
      .then(res => dispatch({ type: FETCH_TASK, payload: { ...res.data, columnId } }));
  };
};

export const updateTask = (taskId, data) => {
  if (!data.position) {
    data.position = 1;
  }

  return (dispatch) => {
    return api.patch(`/tasks/${taskId}`, data)
      .then(res => dispatch({ type: UPDATE_TASK, payload: { ...res.data, taskId } }));
  };
};

export const removeTask = (taskId, columnId) => {
  return (dispatch) => {
    return api.delete(`/tasks/${taskId}`)
      .then(res => dispatch({ type: REMOVE_TASK, payload: { id: taskId, columnId }}));
  }
}
