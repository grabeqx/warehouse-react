import { call, put, takeLatest, all } from 'redux-saga/effects';

import warehouseActions from '../actions/warehouseActions';
import ACTIONS from '../constants/actions';

function* getProducts(action) {
    const products = yield call(warehouseActions.getProducts, action.payload);
    yield put({type: ACTIONS.GET_PRODUCTS_SUCCESS, payload: products});
}

function* warehouseSaga() {
    yield takeLatest(ACTIONS.GET_PRODUCTS, getProducts);
}

export default warehouseSaga;