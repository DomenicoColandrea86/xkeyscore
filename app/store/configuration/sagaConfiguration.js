import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default class SagaConfiguration {
  getMiddleware() {
    return sagaMiddleware;
  }

  runSaga(rootSaga) {
    sagaMiddleware.run(rootSaga);
  }
}
