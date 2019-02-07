import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import productStyle from "assets/jss/components/productStyle.jsx";

const Product = ({classes, product}) => {
  return(
    <div className={classes.container}>
      {product.ProductID}, {product.ProductName}, {product.UnitPrice}
    </div>
  )
}

export default withStyles(productStyle)(Product);