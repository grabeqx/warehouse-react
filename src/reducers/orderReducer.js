import CONFIG from '../constants/config';
import ACTIONS from '../constants/actions';

const orderReducer = (state = {
    products: [],
    query: '',
    toggleClear: false
}, action) => {
    switch(action.type) {
        
        case ACTIONS.SAVE_ORDER:
            return {
                ...state,
                toggleClear: false,
                products: [],
                query: ''
            }
        case ACTIONS.SAVE_ORDER_SUCCESS:
            return {
                ...state,
                toggleClear: true
            }
        case ACTIONS.GET_ORDERED_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                toggleClear: false
            }

        default:
            return state;
    }
}


export default orderReducer;