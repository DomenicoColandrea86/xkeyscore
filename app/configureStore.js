import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducer from './reducers';
import promise from './utils/promise';

const configureStore = (onCompletion) => {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
    devTools({
      name: 'ecommerce',
      realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
};

export default configureStore;
