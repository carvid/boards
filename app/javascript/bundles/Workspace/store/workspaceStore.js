import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionsBlacklist: [
      ],
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(reduxThunk),
);

export default function configureStore(initialState) {
  return createStore(reducers, initialState, enhancer);
}
