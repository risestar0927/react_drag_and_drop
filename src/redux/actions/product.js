import { createAsyncAction} from 'helpers/redux';
import Fetch from 'helpers/fetch';

import $ from 'redux/types/product';

export const fetchProducts = () => createAsyncAction(
  Fetch.get({
    path: 'api/applications',
  }),
  $.FETCH_PRODUCT_REQUEST,
);

export const updateProducts = (products) => {
  return {
    type: $.UPDATE_PRODUCTS,
    payload: products,
  }
}
export const updateProductsOfInvoice = (products) => {
  return {
    type: $.UPDATE_PRODUCTS_INVOICE,
    payload: products,
  }
}
