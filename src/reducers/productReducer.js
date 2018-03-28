import ACTIONS from '../constants/actions';

const productReducer = (state = {
    productPage: 0,
    productStep: 100,
    products: [],
    query: ''
}, action) => {
    switch(action.type) {

        case ACTIONS.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: [...state.products, ...action.payload]
            }
        case ACTIONS.SEARCH_PRODUCTS:
            return {
                ...state,
                products: [],
                query: action.payload.query
            }

        default:
            return state;
    }
}


export default productReducer;