import React, {Component} from 'react'

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ProductLineContainer from "components/ProductLineContainer/ProductLineContainer.jsx"
import GridHeader from "components/InvoiceBody/GridHeader.jsx"

import withStyles from "@material-ui/core/styles/withStyles";

// style for this view
import gridInvoiceBodyStyle from "assets/jss/components/gridInvoiceBodyStyle.jsx";

import { connect } from 'react-redux';
import { createMapStateToProps } from 'helpers/redux';
const mapStateToProps = createMapStateToProps(['products', 'invoiceFormat']);
const mapDispatchToProps = {};

class GridInvoiceBody extends Component{

  sortByField = (fieldValue) => {

  }

  render(){
    const {classes, invoiceFormat, products} = this.props;
    const {productsOfInvoice} = products;
    const {gridFields} = invoiceFormat.data[1].columns[0].shapes[0];
    let totalPrice = 0;

    if(productsOfInvoice.length !== 0)
      totalPrice = productsOfInvoice.reduce((total, product) => total + parseFloat(product.UnitPrice, 10) - parseFloat(product.ProductDiscount, 10), 0)
    return(
      <div className={classes.invoiceBody}>
        <GridContainer className={classes.gridContainerHeader}>
          {
            gridFields.map((field, key) => {
              return(
                <GridHeader fieldSpec={field} key={key} xs={2} sortByField={this.sortByField}/>
              )
            })
          }
          <GridItem xs={1} className={classes.gridItem}>          
          </GridItem>
        </GridContainer>
        <ProductLineContainer 
          onProductDrop={this.props.handleProductDropOnInvoicePanel}
          products={productsOfInvoice}
          onClickClose={this.props.handleClickCloseProductLine}
          onClickEdit={this.props.handleClickEditProductLine}
          onProductChanged={this.props.handleProductChanged}
          gridFields={gridFields}
        />
        <GridContainer className={classes.gridContainerHeader}>
          <GridItem xs={8}></GridItem>
          <GridItem xs={2}>TotalPrice</GridItem>
          <GridItem xs={2}>${totalPrice.toFixed(2)}</GridItem>
        </GridContainer>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(gridInvoiceBodyStyle)(GridInvoiceBody));