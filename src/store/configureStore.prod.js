import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  // return createStore(rootReducer, initialState);
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
