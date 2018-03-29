import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './appReducer';
import productsReducer from './productsReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    appReducer,
    productsReducer,
    productReducer,
    routing: routerReducer
})

export default rootReducer;