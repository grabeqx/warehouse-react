import ACTIONS from '../constants/actions';


export function getProducts(page, step) {
    return {
        type: ACTIONS.GET_PRODUCTS,
        payload: {page, step}
    }
}