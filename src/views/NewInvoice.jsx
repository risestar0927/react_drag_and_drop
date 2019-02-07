import React, {Component} from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ProductContainer from "components/ProductContainer/ProductContainer.jsx"
import Section from "components/Section.jsx"

//styles
import newInvoiceStyle from "assets/jss/views/newInvoiceStyle.jsx";

import { connect } from 'react-redux';
import { createMapStateToProps } from 'helpers/redux';
import {updateProducts} from 'redux/actions/product'

const mapStateToProps = createMapStateToProps(['product', 'shape']);
const mapDispatchToProps = {updateProducts};

class NewInvoice extends Component
{

  handleProductDropOnProductsPanel = (e) => {
    const {addedIndex, removedIndex} = e;

    if(addedIndex === null && removedIndex === null)
      return;

    let newProducts = [...this.props.product.products]
    if(removedIndex !== null && addedIndex === null)
    {
      newProducts.splice(removedIndex, 1);
      this.props.updateProducts(newProducts);
    }
  }

  render(){
    const {classes, shape} = this.props;
    const {products} = this.props.product;
    return (
      <GridContainer>
      <GridItem xs={3}>
        <div className={classes.invoiceBody}>
          <ProductContainer products={products} onProductDrop={this.handleProductDropOnProductsPanel}/>
        </div>
      </GridItem>
      <GridItem xs={9}>
        <div className={classes.invoiceBody}>
        {
          shape.data.map((row, key) =>
            <Section key={key} sectionSpec={row} />)
        }
        </div>
      </GridItem>
      </GridContainer>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(newInvoiceStyle)(NewInvoice));
