import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import { persistStore } from 'redux-persist-immutable';
import RouteConfiguration from '../routes';
import PersistConfiguration from './configuration/persistConfiguration';
import MiddlewareConfiguration from './configuration/middlewareConfiguration';
import SagaConfiguration from './configuration/sagaConfiguration';

// Creates the store
export default (rootReducer, rootSaga) => {
  const persistConfiguration = new PersistConfiguration();
  const middlewareConfiguration = new MiddlewareConfiguration();
  const routeConfiguration = new RouteConfiguration();
  const sagaConfiguration = new SagaConfiguration();

  // Add libraries middleware
  middlewareConfiguration.addMiddleware(sagaConfiguration.getMiddleware());

  // Add persist blacklist
  persistConfiguration.addBlacklist(routeConfiguration.getReducerId());
  persistConfiguration.addBlacklist('form');

  // Prepare dependencies to create store
  const middleware = middlewareConfiguration.getMiddleware();
  const enhancers = compose(
    applyMiddleware(...middleware),
    persistConfiguration.getMigrationEnhancer(),
    persistConfiguration.getRehydrateEnhancer(),
    devTools({ name: Platform.OS, realtime: true }),
  );

  // Create store
  const store = createStore(rootReducer, enhancers);

  // Start sagas
  sagaConfiguration.runSaga(rootSaga);

  // Fill store with storage content
  persistStore(store, persistConfiguration.getConfiguration());

  return store;
};
