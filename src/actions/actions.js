import ACTIONS from '../constants/actions';


export function getProducts(page, step, query) {
    return {
        type: ACTIONS.GET_PRODUCTS,
        payload: {page, step, query}
    }
}

export function searchProduct(page, step, query) {
    return {
        type: ACTIONS.SEARCH_PRODUCTS,
        payload: {page, step, query}
    }
}

export function filterProducts(start, end) {
    return {
        type: ACTIONS.FILTER_PRODUCTS,
        payload: {start, end}
    }
}