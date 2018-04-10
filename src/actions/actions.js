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

export function updateProduct(product) {
    return {
        type: ACTIONS.UPDATE_PRODUCT,
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

export function notifyUser(status) {
    return {
        type: ACTIONS.NOTIFY_USER,
        payload: {status}
    }
}

export function closeNotify() {
    return {
        type: ACTIONS.CLOSE_NOTIFY
    }
}

export function addOrder(products, date, productsIds, type, name) {
    return {
        type: ACTIONS.ADD_ORDER,
        payload: {products, date, productsIds, type, name}
    }
}

export function getProductOrders(id) {
    return {
        type: ACTIONS.GET_PRODUCT_ORDERS,
        payload: {id}
    }
}

export function getDayOrders() {
    return {
        type: ACTIONS.GET_DAY_ORDERS
    }
}

export function getWeekOrders() {
    return {
        type: ACTIONS.GET_WEEK_ORDERS
    }
}

export function getMonthOrders() {
    return {
        type: ACTIONS.GET_MONTH_ORDERS
    }
}

export function getProductsState() {
    return {
        type: ACTIONS.GET_PRODUCTS_STATE
    }
}

export function clearTable() {
    return {
        type: ACTIONS.CLEAR_TABLE
    }
}

export function getConfig() {
    return {
        type: ACTIONS.GET_CONFIG
    }
}

export function saveConfig(config) {
    return {
        type: ACTIONS.SAVE_CONFIG,
        payload: {config}
    }
}

export function getUsers() {
    return {
        type: ACTIONS.GET_USERS
    }
}

export function addUser(user) {
    return {
        type: ACTIONS.ADD_USER,
        payload: {user}
    }
}

export function removeUser(userId) {
    return {
        type: ACTIONS.REMOVE_USER,
        payload: {userId}
    }
}

export function removeProduct(productId) {
    return {
        type: ACTIONS.REMOVE_PRODUCT,
        payload: {productId}
    }
}

export function handleDrawerToggle() {
    return {
        type: ACTIONS.TOGGLE_DRAWER
    }
}