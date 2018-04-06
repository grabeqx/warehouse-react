import ACTIONS from '../constants/actions';

const raportReducer = (state = {
    orders: [],
    products: []
}, action) => {
    switch(action.type) {
        case ACTIONS.GET_DAY_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders
            }
        case ACTIONS.GET_WEEK_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders
            }
        case ACTIONS.GET_MONTH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders
            }
        case ACTIONS.GET_PRODUCTS_STATE_SUCCESS:
            return {
                ...state,
                orders: [],
                products: action.payload.products
            }
        default:
            return state;
    }
}


export default raportReducer;