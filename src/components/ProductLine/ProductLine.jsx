import React from "react";

//core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Field from "components/ProductLine/Field.jsx"

//material ui components
import Button from "@material-ui/core/Button";

//styles
import withStyles from "@material-ui/core/styles/withStyles";
import productLineStyle from "assets/jss/components/productLineStyle.jsx";

//material ui icons
import Close from "@material-ui/icons/Close";
import Edit from "@material-ui/icons/Edit";

const indexConverter = {
  "ProductId": "ProductID",
  "Quantity": "ProductID",
  "Description": "ProductDescription",
  "BaseAmount": "UnitPrice",
  "ManualDiscountAmount": "ProductDiscount",
}
class ProductLine extends React.Component{

  constructor(props){
    super(props);
    const {product} = props;
    this.state = {
      product,
    }
  }

  handleClickDescription = () => {
    const isDescriptionEditable = true, isPriceEditable = false;
    this.setState({isDescriptionEditable, isPriceEditable});
  }

  handleClickPrice = () => {
    const isDescriptionEditable = false, isPriceEditable = true;
    this.setState({isDescriptionEditable, isPriceEditable});
  }

  handleClickDiscount = () => {
    const isDescriptionEditable = false, isPriceEditable = false, isDiscountEditable = true;
    this.setState({isDescriptionEditable, isPriceEditable, isDiscountEditable});
  }

  handleKeyPressed = (e) => {
    if (e.key !== 'Enter')
      return;
    const isDescriptionEditable = false, isPriceEditable = false, isDiscountEditable = false;
    this.setState({isDescriptionEditable, isPriceEditable, isDiscountEditable});
    this.props.onProductChanged(this.state.product);
  }

  handleChangeDescription = e => {
    this.setState({product: {...this.state.product, ProductDescription: e.target.value}});
  }

  handleChangePrice = e => {
    this.setState({product: {...this.state.product, UnitPrice: e.target.value}});
  }

  handleChangeDiscount = e => {
    this.setState({product: {...this.state.product, ProductDiscount: e.target.value}});
  }

  handleInputBlur = () => {
    const isDescriptionEditable = false, isPriceEditable = false, isDiscountEditable = false;
    this.setState({isDescriptionEditable, isPriceEditable, isDiscountEditable});
    this.props.onProductChanged(this.state.product);
  }
  handleValueChanged = (value, fieldValue) => {
    let {product} = this.props;
    product[indexConverter[fieldValue]] = value;
    this.props.onProductChanged(product);
  }

  render(){
    const {classes, onClickClose, index, onClickEdit, gridFields, product} = this.props;
    return(
    <GridContainer className={classes.gridContainerContent}>
      {
        gridFields.map((field, key) => {
          return (
            <Field xs={2} onValueChanged={this.handleValueChanged} value={product[indexConverter[field.value]]} fieldSpec={field} key={key}/>
          )
        })
      }
      <GridItem xs={1} className={classes.gridItem}>
        <GridContainer>
          <GridItem xs={4}>
            <Button className={classes.editButton} onClick={e => onClickEdit(index)}>
              <Edit className={classes.icon} />
            </Button>
          </GridItem>
          <GridItem xs={4}>
            <Button className={classes.closeButton} onClick={e => onClickClose(index)}>
              <Close className={classes.icon} />
            </Button>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
    )
  }
}

export default withStyles(productLineStyle)(ProductLine);