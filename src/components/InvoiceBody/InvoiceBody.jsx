import React, {Component} from 'react'

//components
import GridInvoiceBody from './GridInvoiceBody'
import EditInvoiceModal from "components/Modal/EditInvoiceModal";

//material-ui components
import Modal from '@material-ui/core/Modal';

import { connect } from 'react-redux';
import {updateProductsOfInvoice, updateProducts} from 'redux/actions/products'
import { createMapStateToProps } from 'helpers/redux';
const mapStateToProps = createMapStateToProps(['invoiceFormat', 'products']);
const mapDispatchToProps = {updateProductsOfInvoice, updateProducts};

const modalStyle = {
  top: '10%',
  left: '15%',
  width: '70%',
}

class InvoiceBody extends Component{
  state = {
    isEditInvoiceModalOpened: false,
    invoiceToEdit: {}
  }

  componentDidMount(){
    this.products = this.props.products;
  }

  handleProductDropOnInvoicePanel = (e) => {
    const {addedIndex, removedIndex, payload} = e;

    if(addedIndex === null && removedIndex === null)
      return;

    let productToAdd = payload;
    let {productsOfInvoice} = this.props.products;
    let newProducts = [...productsOfInvoice];

    if(removedIndex !== null)
      productToAdd = newProducts.splice(removedIndex, 1)[0];

    if(addedIndex !== null)
    {
      if(productToAdd.ProductDiscount === undefined)
        productToAdd.ProductDiscount = '0';
      newProducts.splice(addedIndex, 0, productToAdd);
    }
    this.props.updateProductsOfInvoice(newProducts);
  }

  handleClickCloseProductLine = (index) => {
    const {productsOfInvoice, products} = this.props.products;
    let newProductOfInvoice = [...productsOfInvoice];
    const removedProduct = newProductOfInvoice.splice(index, 1)[0];
    const {products: originalProducts} = this.products;

    let j = 0;
    for(let i = 0;i < originalProducts.length;i ++)
    {
      if(originalProducts[i]._id === removedProduct._id)
        break;
      if(products[j] !==undefined && originalProducts[i]._id === products[j]._id)
        j ++;
    }

    let newProducts = this.props.products.products.slice(0);
    newProducts.splice(j, 0, removedProduct);

    this.props.updateProducts(newProducts);
    this.props.updateProductsOfInvoice(newProductOfInvoice);
  }

  handleClickEditProductLine = (index) => {
    const {productsOfInvoice} = this.props.products;
    let invoiceToEdit = productsOfInvoice[index];
    this.setState({invoiceToEdit, isEditInvoiceModalOpened: true });
  }

  changeProductsInInvoiceWithNewProduct = (newProduct) => {
    const {productsOfInvoice} = this.props.products;
    let newProductOfInvoice = productsOfInvoice.slice(0);
    let editedProduct = newProductOfInvoice.filter(product => product._id === newProduct._id)[0];
    editedProduct.ProductDescription = newProduct.ProductDescription;
    editedProduct.UnitPrice = newProduct.UnitPrice;
    editedProduct.ProductDiscount = newProduct.ProductDiscount;
    return newProductOfInvoice;
  }

  handleCloseEditInvoiceModal = (newProduct) => {
    if(newProduct === undefined)
    {
      this.setState({isEditInvoiceModalOpened: false});
      return;
    }
    let newProductOfInvoice = this.changeProductsInInvoiceWithNewProduct(newProduct);
    this.setState({isEditInvoiceModalOpened: false});
    this.props.updateProductsOfInvoice(newProductOfInvoice);
  }

  handleProductChanged = (newProduct) => {
    let newProductOfInvoice = this.changeProductsInInvoiceWithNewProduct(newProduct);
    this.props.updateProductsOfInvoice(newProductOfInvoice);
  }

  render(){
    const {invoiceFormat} = this.props;
    const {invoiceToEdit, isEditInvoiceModalOpened} = this.state;
    if(invoiceFormat.isLoading === true)
      return null;
    if(invoiceFormat.data[1].columns[0].shapes[0].type === 44)
      return (
        <div>
          <GridInvoiceBody handleProductDropOnInvoicePanel={this.handleProductDropOnInvoicePanel}
                                  handleClickCloseProductLine={this.handleClickCloseProductLine}
                                  handleClickEditProductLine={this.handleClickEditProductLine}
                                  handleProductChanged={this.handleProductChanged}
                  />
          <Modal
            open={isEditInvoiceModalOpened}
            onClose={e => this.handleCloseEditInvoiceModal(undefined)}
            disableAutoFocus={true}
            style={modalStyle}
          >
            <EditInvoiceModal invoice={invoiceToEdit} exitModal={this.handleCloseEditInvoiceModal}/>
          </Modal>
        </div>  
      )
    return null;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceBody);