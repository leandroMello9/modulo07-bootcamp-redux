import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga';

const sagaMiddlewares = createSagaMiddleware();
const enhancer = process.env.NODE_ENV == 'development' ? compose(
  console.tron.createEnhancer(),
  applyMiddleware(sagaMiddlewares)
  )
  : applyMiddleware(sagaMiddlewares);
const store = createStore(rootReducer,enhancer);
sagaMiddlewares.run(rootSaga);
export default store;