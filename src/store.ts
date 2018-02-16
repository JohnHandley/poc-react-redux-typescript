import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';

import { rootReducer, RootState } from './features/root-reducer';
import { rootEpic } from './features/root-epic';

const composeEnhancers: any = (
  process.env.NODE_ENV === 'development'
) ? composeWithDevTools : compose;

export const epicMiddleware = createEpicMiddleware(rootEpic);
export const browserHistory = createBrowserHistory();
export const routerMiddleware = createRouterMiddleware(browserHistory);

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    epicMiddleware,
    routerMiddleware,
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(
    rootReducer,
    initialState!,
    enhancer
  );
}

// pass an optional param to rehydrate state on app start
export const store = configureStore();

// export store singleton instance
export default store;
