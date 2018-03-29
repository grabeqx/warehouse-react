import CONFIG from '../constants/config';
import ACTIONS from '../constants/actions';

const productReducer = (state = {
    id: '',
    name: '',
    quantity: 0,
    price: '0',
    image: '#'
}, action) => {
    switch(action.type) {
        
        case ACTIONS.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export default productReducer;