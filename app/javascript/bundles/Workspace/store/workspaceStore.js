import { createStore } from 'redux';
import workspaceReducer from '../reducers/workspaceReducer';

const configureStore = (railsProps) => (
  createStore(workspaceReducer, railsProps,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default configureStore;
