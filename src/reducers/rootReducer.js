import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './appReducer';
import productsReducer from './productsReducer';
import productReducer from './productReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    appReducer,
    productsReducer,
    productReducer,
    orderReducer,
    routing: routerReducer
})

export default rootReducer;