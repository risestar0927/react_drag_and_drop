import React from "react";
import { Container, Draggable } from 'react-smooth-dnd';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Product from "components/Product/Product.jsx"

//styles
import productContainerStyle from "assets/jss/components/productContainerStyle.jsx";

const ProductContainer = ({products, onProductDrop}) => {
  return (
    <Container 
      groupName="product"
      getChildPayload={
        index => products[index]
      }
      onDrop={e => onProductDrop(e)}
    >
      {products.map(product => {
        return (
          <Draggable key={product._id}>
            <Product product={product}/>
          </Draggable>
        );
      })}
    </Container>
  )
}
export default withStyles(productContainerStyle)(ProductContainer);
