import ACTIONS from '../constants/actions';

const productsReducer = (state = {
    productPage: 0,
    productStep: 9999,
    products: [],
    query: '',
    filterStart: '',
    filterEnd: '',
    productAlert: 5,
    loadNewProducts: 0
}, action) => {
    switch(action.type) {

        case ACTIONS.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loadNewProducts: 0
            }
        case ACTIONS.SEARCH_PRODUCTS:
            return {
                ...state,
                products: [],
                query: action.payload.query
            }
        case ACTIONS.FILTER_PRODUCTS:
            return {
                ...state,
                products: [],
                productPage: state.productPage * 0,
                filterStart: action.payload.start,
                filterEnd: action.payload.end
            }
        case ACTIONS.RESET:
            return {
                ...state,
                products: [],
                productPage: state.productPage * 0,
                query: '',
                filterStart: '',
                filterEnd: ''
            }
        case ACTIONS.CLEAR_TABLE: {
            return {
                ...state,
                products: []
            }
        }
        case ACTIONS.REMOVE_PRODUCT: {
            return {
                ...state,
                loadNewProducts: 0
            }
        }
        case ACTIONS.REMOVE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loadNewProducts: 1
            }
        }
        default:
            return state;
    }
}


export default productsReducer;