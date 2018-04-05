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

export function selectValue(id) {
    return {
        type: ACTIONS.ADD_PRODUCT,
        payload: {id}
    }
}

export function getOrderedProducts(query) {
    return {
        type: ACTIONS.GET_ORDERED_PRODUCTS,
        payload: {query}
    }
}

export function saveOrder(products) {
    return {
        type: ACTIONS.SAVE_ORDER,
        payload: {products}
    }
}

export function notifyUser(text) {
    return {
        type: ACTIONS.NOTIFY_USER,
        payload: {text}
    }
}

export function closeNotify() {
    return {
        type: ACTIONS.CLOSE_NOTIFY
    }
}

export function addOrder(products, date, productsIds, type) {
    return {
        type: ACTIONS.ADD_ORDER,
        payload: {products, date, productsIds, type}
    }
}

export function getProductOrders(id) {
    return {
        type: ACTIONS.GET_PRODUCT_ORDERS,
        payload: {id}
    }
}