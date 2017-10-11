import { combineReducers } from 'redux';
import {
  normalizeTask,
  normalizeTasks,
} from './schemas';

import {
  FETCH_TASKS,
  FETCH_TASK,
} from '../constants';

const addTask = (state, action) => {
  const { payload } = action;
  const { entities: { boards } } = normalizeTask(payload);
  return {
    ...state,
    ...tasks,
  };
}
const addTasks = (state, action) => {
  const { payload } = action;
  const { entities: { boards } } = normalizeTasks(payload);
  return {
    ...state,
    ...tasks,
  };
}

const tasksById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return addTasks(state, action);
    case FETCH_TASK:
      return addTask(state, action);
    default:
      return state;
  }
};

export default combineReducers({
  byId: tasksById,
});
