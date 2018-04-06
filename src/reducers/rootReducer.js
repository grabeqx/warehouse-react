import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './appReducer';
import productsReducer from './productsReducer';
import productReducer from './productReducer';
import orderReducer from './orderReducer';
import raportReducer from './raportReducer';

const rootReducer = combineReducers({
    appReducer,
    productsReducer,
    productReducer,
    orderReducer,
    raportReducer,
    routing: routerReducer
})

export default rootReducer;