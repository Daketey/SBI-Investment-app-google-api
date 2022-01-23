import {createStore, applyMiddleware} from 'redux';
import createSagaMiddelware from 'redux-saga';
import reducer from './ReducerMain';
import sagaMain from './SagaMain';

const sagaMiddleware = createSagaMiddelware();
export const store = createStore(reducer,  applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaMain);