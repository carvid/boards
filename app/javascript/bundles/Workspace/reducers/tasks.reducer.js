import { combineReducers } from 'redux';
import { omit } from 'lodash';
import {
  normalizeBoards,
  normalizeTask,
} from './schemas';

import {
  FETCH_BOARDS,
  FETCH_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
} from '../constants';

const addTask = (state, action) => {
  const { payload } = action;
  const { entities: { tasks } } = normalizeTask(payload);
  return {
    ...state,
    ...tasks,
  };
};

const addTasks = (state, action) => {
  const { payload } = action;
  const { entities: { tasks } } = normalizeBoards(payload);
  return {
    ...state,
    ...tasks,
  };
};

const removeTask = (state, action) => {
  const { payload: { id } } = action;
  console.log(state, action);
  const newState = omit(state, [id]);
  console.log(newState)
  return { ...newState };
}

const tasksById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return addTasks(state, action);
    case FETCH_TASK:
    case UPDATE_TASK:
      return addTask(state, action);
    case REMOVE_TASK:
      return removeTask(state, action);
    default:
      return state;
  }
};

export default combineReducers({
  byId: tasksById,
});
