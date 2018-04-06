import ACTIONS from '../constants/actions';

const productsReducer = (state = {
    productPage: 0,
    productStep: 9999,
    products: [],
    query: '',
    filterStart: '',
    filterEnd: '',
    productAlert: 50
}, action) => {
    switch(action.type) {

        case ACTIONS.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productPage: state.productPage + 1,
                products: [...state.products, ...action.payload]
            }
        case ACTIONS.SEARCH_PRODUCTS:
            return {
                ...state,
                products: [],
                productPage: state.productPage * 0,
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
        case ACTIONS.GET_CONFIG_SUCCESS: {
            return {
                ...state,
                productAlert: action.payload.config.productAlert
            }
        }
        case ACTIONS.SAVE_CONFIG: {
            return {
                ...state,
                productAlert: action.payload.config.productAlert
            }
        }
        default:
            return state;
    }
}


export default productsReducer;