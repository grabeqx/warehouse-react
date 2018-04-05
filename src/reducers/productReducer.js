import CONFIG from '../constants/config';
import ACTIONS from '../constants/actions';

const productReducer = (state = {
    product: {
        id: '',
        name: '',
        quantity: 0,
        price: '0',
        image: '#',
    },
    orders: []
}, action) => {
    switch(action.type) {
        
        case ACTIONS.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload
            }
        case ACTIONS.GET_PRODUCT_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.orders
            }
        default:
            return state;
    }
}


export default productReducer;