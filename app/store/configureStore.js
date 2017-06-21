import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import promise from '../utils/promise';

// creates the store
export default (rootReducer, rootSaga) => {
  const middleware = [thunk, promise];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  if (__DEV__) {
    if (__DEBUGGING_REMOTELY__) {
      // eslint-disable-next-line import/newline-after-import
      middleware.push(
        require('redux-logger').createLogger({
          collapsed: true,
          duration: true,
        }),
      );
    }
  }

  const enhancers = compose(
    applyMiddleware(...middleware),
    devTools({ name: Platform.OS, realtime: true }),
  );

  // Generate our Redux store
  const store = createStore(rootReducer, enhancers);

  // kick off root saga
  sagaMiddleware.run(rootSaga);

  return store;
};
