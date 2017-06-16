import configureStore from './configureStore';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

export default () => configureStore(rootReducer, rootSaga);
