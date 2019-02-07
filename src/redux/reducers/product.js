//import { defaultState } from 'helpers/redux';
import $ from 'redux/types/product';

const defaultState = { products: [
      {
      "_id" : "5b79cc97822fec51b0717038",
      "ProductID" : "2310023",
      "CategoryID" : 1,
      "Discontinued" : false,
      "ProductName" : "Chai",
      "ProductDescription" : "Chai",
      "QuantityPerUnit" : "10 boxes x 20 bags",
      "ReorderLevel" : 10,
      "SupplierID" : "5c4726331c2c510986676933",
      "UnitPrice" : "18.00",
      "UnitsInStock" : 39,
      "UnitsOnOrder" : 0,
      "RowID" : 1
    },{
      "_id" : "5b79cc97822fec51b0717039",
      "ProductID" : "0000002",
      "CategoryID" : 6,
      "Discontinued" : false,
      "ProductName" : "Pâté chinois",
      "ProductDescription" : "Pâté chinois in Boxes",
      "QuantityPerUnit" : "24 boxes x 2 pies",
      "ReorderLevel" : 20,
      "SupplierID" : "5c4726331c2c510986676933",
      "UnitPrice" : "24.00",
      "UnitsInStock" : 115,
      "UnitsOnOrder" : 0,
      "RowID" : 2
  },{
    "_id" : "5b79cc97822fec51b0719039",
    "ProductID" : "532123",
    "CategoryID" : 6,
    "Discontinued" : false,
    "ProductName" : "Pâté chinois",
    "ProductDescription" : "Pâté chinois in Boxes",
    "QuantityPerUnit" : "24 boxes x 2 pies",
    "ReorderLevel" : 20,
    "SupplierID" : "5c4726331c2c510986676933",
    "UnitPrice" : "24.00",
    "UnitsInStock" : 115,
    "UnitsOnOrder" : 0,
    "RowID" : 2
},{
  "_id" : "5b79cc97822fec51b0713039",
  "ProductID" : "12341234",
  "CategoryID" : 6,
  "Discontinued" : false,
  "ProductName" : "Pâté chinois",
  "ProductDescription" : "Pâté chinois in Boxes",
  "QuantityPerUnit" : "24 boxes x 2 pies",
  "ReorderLevel" : 20,
  "SupplierID" : "5c4726331c2c510986676933",
  "UnitPrice" : "24.00",
  "UnitsInStock" : 115,
  "UnitsOnOrder" : 0,
  "RowID" : 2
},{
  "_id" : "5b79cc97822fec51b0714039",
  "ProductID" : "0000111",
  "CategoryID" : 6,
  "Discontinued" : false,
  "ProductName" : "Pâté chinois",
  "ProductDescription" : "Pâté chinois in Boxes",
  "QuantityPerUnit" : "24 boxes x 2 pies",
  "ReorderLevel" : 20,
  "SupplierID" : "5c4726331c2c510986676933",
  "UnitPrice" : "24.00",
  "UnitsInStock" : 115,
  "UnitsOnOrder" : 0,
  "RowID" : 2
}
],
productsOfInvoice: [

]
}
export const product = (prevState = defaultState, action) => {
  switch(action.type) {
    case $.FETCH_PRODUCT_REQUEST:
    case $.FETCH_PRODUCT_SUCCESS:
    case $.FETCH_PRODUCT_FAILURE:
      return {
        ...prevState,
        //...action.payload,
      };
    case $.UPDATE_PRODUCTS:
      return {
        ...prevState,
        products: action.payload
      }
    case $.UPDATE_PRODUCTS_INVOICE:
      return {
        ...prevState,
        productsOfInvoice: action.payload
      }
    default:
      return prevState;
  }
};
