import ACTIONS from '../constants/actions';

const productReducer = (state = {
    productPage: 1,
    productStep: 50,
    products: []
}, action) => {
    switch(action.type) {

        case ACTIONS.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
}


export default productReducer;