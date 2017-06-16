import { fork, all } from 'redux-saga/effects';
import asyncAuthWatchers from './auth';

// saga must be a function like generator of other functions
const rootSaga = function* rootSaga() {
  yield all([...asyncAuthWatchers.map(watcher => fork(watcher))]);
};

export default rootSaga;
