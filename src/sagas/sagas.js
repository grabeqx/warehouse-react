import {select, call, put, takeLatest, all } from 'redux-saga/effects';

import warehouseActions from '../actions/warehouseActions';
import ACTIONS from '../constants/actions';

function* getProducts(action) {
    const state = yield select();
    const products = yield call(warehouseActions.getProducts, state.productsReducer);
    yield put({type: ACTIONS.GET_PRODUCTS_SUCCESS, payload: products});
}

function* searchProducts(action) {
    const state = yield select();
    const products = yield call(warehouseActions.getProducts, state.productsReducer);
    yield put({type: ACTIONS.GET_PRODUCTS_SUCCESS, payload: products});
}

function* getProduct(action) {
    const product = yield call(warehouseActions.getProduct, action.payload.id);
    yield put({type: ACTIONS.GET_PRODUCT_SUCCESS, payload: product});
}

function* addProduct(action) {
    const status = yield call(warehouseActions.addProduct, action.payload.product);
    yield put({type: ACTIONS.ADD_PRODUCT_SUCCESS, payload: {status}});
}

function* getOrderedProducts(action) {
    const products = yield call(warehouseActions.getOrderProduct, action.payload.query);
    yield put({type: ACTIONS.GET_ORDERED_PRODUCTS_SUCCESS, payload: {products}});
}

function* saveOrder(action) {
    const status = yield call(warehouseActions.saveOrder, action.payload.products);
    yield put({type: ACTIONS.SAVE_ORDER_SUCCESS, payload: {status}});
}

function* addOrder(action) {
    const state = yield select();
    const status = yield call(warehouseActions.addOrder, {...action.payload, userId: state.appReducer.userId});
    yield put({type: ACTIONS.ADD_ORDER_SUCCESS, payload: status});
}

function* getProductOrders(action) {
    const orders = yield call(warehouseActions.getProductOrders, action.payload.id);
    yield put({type: ACTIONS.GET_PRODUCT_ORDERS_SUCCESS, payload: {orders}});
}

function* getDayOrders(action) {
    const orders = yield call(warehouseActions.getDayOrders);
    yield put({type: ACTIONS.GET_DAY_ORDERS_SUCCESS, payload: {orders}});
}

function* getWeekOrders(action) {
    const orders = yield call(warehouseActions.getWeekOrders);
    yield put({type: ACTIONS.GET_WEEK_ORDERS_SUCCESS, payload: {orders}});
}

function* getMonthOrders(action) {
    const orders = yield call(warehouseActions.getMonthOrders);
    yield put({type: ACTIONS.GET_MONTH_ORDERS_SUCCESS, payload: {orders}});
}

function* getProductsState(action) {
    const products = yield call(warehouseActions.getProductsState);
    yield put({type: ACTIONS.GET_PRODUCTS_STATE_SUCCESS, payload: {products}});
}

function* getConfig(action) {
    const config = yield call(warehouseActions.getConfig);
    yield put({type: ACTIONS.GET_CONFIG_SUCCESS, payload: {config}});
}

function* saveConfig(action) {
    const status = yield call(warehouseActions.saveConfig, action.payload.config);
    yield put({type: ACTIONS.SAVE_CONFIG_SUCCESS, payload: {status}});
}

function* getUsers(action) {
    const users = yield call(warehouseActions.getUsers);
    yield put({type: ACTIONS.GET_USERS_SUCCESS, payload: {users}});
}

function* addUser(action) {
    const status = yield call(warehouseActions.addUser, action.payload.user);
    yield put({type: ACTIONS.ADD_USER_SUCCESS, payload: {status}});
}

function* removeUser(action) {
    const status = yield call(warehouseActions.removeUser, action.payload.userId);
    yield put({type: ACTIONS.REMOVE_USER_SUCCESS, payload: {status}});
}

function* removeProduct(action) {
    const status = yield call(warehouseActions.removeProduct, action.payload);
    yield put({type: ACTIONS.REMOVE_PRODUCT_SUCCESS, payload: {status}});
}

function* warehouseSaga() {
    yield takeLatest(ACTIONS.GET_PRODUCTS, getProducts);
    yield takeLatest(ACTIONS.SEARCH_PRODUCTS, searchProducts);
    yield takeLatest(ACTIONS.FILTER_PRODUCTS, searchProducts);
    yield takeLatest(ACTIONS.RESET, getProducts);
    yield takeLatest(ACTIONS.GET_PRODUCT, getProduct);
    yield takeLatest(ACTIONS.ADD_PRODUCT, addProduct);
    yield takeLatest(ACTIONS.GET_ORDERED_PRODUCTS, getOrderedProducts);
    yield takeLatest(ACTIONS.SAVE_ORDER, saveOrder);
    yield takeLatest(ACTIONS.ADD_ORDER, addOrder);
    yield takeLatest(ACTIONS.GET_PRODUCT_ORDERS, getProductOrders);
    yield takeLatest(ACTIONS.GET_DAY_ORDERS, getDayOrders);
    yield takeLatest(ACTIONS.GET_WEEK_ORDERS, getWeekOrders);
    yield takeLatest(ACTIONS.GET_MONTH_ORDERS, getMonthOrders);
    yield takeLatest(ACTIONS.GET_PRODUCTS_STATE, getProductsState);
    yield takeLatest(ACTIONS.GET_CONFIG, getConfig);
    yield takeLatest(ACTIONS.GET_USERS, getUsers);
    yield takeLatest(ACTIONS.ADD_USER, addUser);
    yield takeLatest(ACTIONS.REMOVE_USER, removeUser);
    yield takeLatest(ACTIONS.SAVE_CONFIG, saveConfig);
    yield takeLatest(ACTIONS.REMOVE_PRODUCT, removeProduct);
}

export default warehouseSaga;