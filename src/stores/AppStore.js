import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import warehouseSaga from '../sagas/sagas';

export const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(historyMiddleware, sagaMiddleware)
);

sagaMiddleware.run(warehouseSaga);

export default store;