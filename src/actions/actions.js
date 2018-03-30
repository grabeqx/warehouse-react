import ACTIONS from '../constants/actions';

export function changeTitle(title) {
    return {
        type: ACTIONS.CHANGE_TITLE,
        payload: {title}
    }
}

export function getProducts(page, step, query, filterStart, filterEnd) {
    return {
        type: ACTIONS.GET_PRODUCTS,
        payload: {page, step, query, filterStart, filterEnd}
    }
}

export function searchProduct(query) {
    return {
        type: ACTIONS.SEARCH_PRODUCTS,
        payload: {query}
    }
}

export function filterProducts(start, end) {
    return {
        type: ACTIONS.FILTER_PRODUCTS,
        payload: {start, end}
    }
}

export function reset() {
    return {
        type: ACTIONS.RESET
    }
}

export function getProduct(id) {
    return {
        type: ACTIONS.GET_PRODUCT,
        payload: {id}
    }
}

export function addProduct(product) {
    return {
        type: ACTIONS.ADD_PRODUCT,
        payload: {product}
    }
}