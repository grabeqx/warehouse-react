import CONFIG from '../constants/config';
import ACTIONS from '../constants/actions';

const productReducer = (state = {
    product: {
        id: '',
        name: '',
        quantity: 0,
        price: '0',
        image: '#',
        quantityAlert: 0
    },
    orders: [],
    update: 0
}, action) => {
    switch(action.type) {
        
        case ACTIONS.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
                update: 0
            }
        case ACTIONS.GET_PRODUCT_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders
            }
        case ACTIONS.UPDATE_PRODUCT:
            return {
                ...state,
                update: 0
            }
        case ACTIONS.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                update: 1
            }
        default:
            return state;
    }
}


export default productReducer;