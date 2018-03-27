import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './appReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    appReducer,
    productReducer,
    routing: routerReducer
})

export default rootReducer;