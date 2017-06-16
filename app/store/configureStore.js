import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import promise from '../utils/promise';

// creates the store
export default (rootReducer, rootSaga) => {
  const middleware = [thunk, promise];
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  // kick off root saga
  sagaMiddleware.run(rootSaga);

  return store;
};
