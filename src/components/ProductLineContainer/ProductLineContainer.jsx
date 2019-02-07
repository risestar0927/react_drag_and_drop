import React from "react";
import { Container, Draggable} from 'react-smooth-dnd';

// core components
import ProductLine from "components/ProductLine/ProductLine.jsx"

class ProductLineContainer extends React.Component
{
  render(){
    const {products, onProductDrop, onClickClose, onClickEdit, onProductChanged, gridFields} = this.props;
    return (
      <Container 
        groupName="product"
        onDrop={e => onProductDrop(e)}
        lockAxis="y"
        nonDragAreaSelector=".nonDraggable"
      >
        {
          products.map((product, index) => {
          return (    
            <Draggable key={index}>
              <ProductLine product={product} onClickClose={onClickClose} onClickEdit={onClickEdit} index={index} onProductChanged={onProductChanged} gridFields={gridFields}/>
            </Draggable>
          );
          })
        }
      </Container>
    )
  }
}
export default ProductLineContainer;
