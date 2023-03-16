import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux';
import rootSagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: storage,
  whiteList: ['authReducer']
};

const sagaMidleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore( persistedReducer, applyMiddleware(sagaMidleware));
  let persistor = persistStore(store);
  sagaMidleware.run(rootSagas);
  return {store, persistor};
};