import { combineReducers } from 'redux';
import { WORKSPACE_NAME_UPDATE } from '../constants/workspaceConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case WORKSPACE_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const workspaceReducer = combineReducers({ name });

export default workspaceReducer;
