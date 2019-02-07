import { createAsyncActionTypes } from 'helpers/redux';
// Async Action Types

const productAsyncActions = createAsyncActionTypes('PRODUCT', ['FETCH'])
const productSyncActions = {
  UPDATE_PRODUCTS: 'UPDATE_PRODUCTS',
  UPDATE_PRODUCTS_INVOICE: 'UPDATE_PRODUCTS_INVOICE',
}

export default Object.assign({}, productAsyncActions, productSyncActions);
