import CONFIG from '../constants/config';
import ACTIONS from '../constants/actions';

const orderReducer = (state = {
    products: [],
    query: ''
}, action) => {
    switch(action.type) {
        
        case ACTIONS.GET_ORDERED_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products
            }

        default:
            return state;
    }
}


export default orderReducer;