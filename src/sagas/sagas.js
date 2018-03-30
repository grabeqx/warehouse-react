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
    yield put({type: ACTIONS.ADD_PRODUCT_SUCCESS, payload: status});
}

function* warehouseSaga() {
    yield takeLatest(ACTIONS.GET_PRODUCTS, getProducts);
    yield takeLatest(ACTIONS.SEARCH_PRODUCTS, searchProducts);
    yield takeLatest(ACTIONS.FILTER_PRODUCTS, searchProducts);
    yield takeLatest(ACTIONS.RESET, getProducts);
    yield takeLatest(ACTIONS.GET_PRODUCT, getProduct);
    yield takeLatest(ACTIONS.ADD_PRODUCT, addProduct);
}

export default warehouseSaga;