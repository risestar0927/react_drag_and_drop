import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// @material-ui/icons
import Contacts from "@material-ui/icons/Contacts";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// style for this view
import modalFormsStyle from "assets/jss/modals/modalFormsStyle.jsx";

const modalContentStyle = {
  overflowY: 'auto'
}

class EditInvoiceModal extends React.Component {
  
  constructor(props){
    super(props);
    const {invoice} = props;
    this.state = {
      invoice
    };
  }
  

  handleClickSave = async () => {
    this.props.exitModal(this.state.invoice);
  };

  handleClickCancel = () => {
    this.props.exitModal(undefined);
  }

  handleChangeDescription = e => {
    this.setState({invoice: {...this.state.invoice, ProductDescription: e.target.value}});
  }

  handleChangePrice = e => {
    this.setState({invoice: {...this.state.invoice, UnitPrice: e.target.value}});
  }

  handleChangeDiscount = e => {
    this.setState({invoice: {...this.state.invoice, ProductDiscount: e.target.value}});
  }

  render() {
    
    const { classes } = this.props;
    const {ProductDescription, UnitPrice, ProductDiscount} = this.state.invoice;
    const {ProductID, ProductName} = this.props.invoice;

    return (
      <div className={classes.card}>
        <div>
          <div className={classes.iconContainer}>
          <Contacts />
          </div>
          <h4 className={classes.dlgTitle}>Edit Invoice</h4>
        </div>
        <div style={modalContentStyle}>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={3} className={classes.labelHorizontal}>
              Product ID
            </GridItem>
            <GridItem xs={9}>
              <Input
                fullWidth={true}
                value={ProductID}
                type="text"
                readOnly={true}
              />
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={3} className={classes.labelHorizontal}>
              Product Name
            </GridItem>
            <GridItem xs={9}>
              <Input
                  fullWidth={true}
                  value={ProductName}
                  type="text"
                  readOnly={true}
                />
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={3} className={classes.labelHorizontal}>
                Product Description
            </GridItem>
            <GridItem xs={9}>
              <Input
                fullWidth={true}
                value={ProductDescription}
                type="text"
                onChange={e => this.handleChangeDescription(e)}
              />
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={3} className={classes.labelHorizontal}>
                Price
            </GridItem>
            <GridItem xs={9}>
              <Input
                  fullWidth={true}
                  value={UnitPrice}
                  type="number"
                  onChange={e => this.handleChangePrice(e)}
                />
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={3} className={classes.labelHorizontal}>
                Discount
            </GridItem>
            <GridItem xs={9}>
              <Input
                  fullWidth={true}
                  value={ProductDiscount}
                  type="number"
                  onChange={e => this.handleChangeDiscount(e)}
                />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={8}>
            </GridItem>
            <GridItem xs={2}>
              <Button onClick={this.handleClickSave} className={classes.btnDlgCommon}>Save</Button>
            </GridItem>
            <GridItem xs={2}>
              <Button onClick={this.handleClickCancel} className={classes.btnDlgCommon}>Cancel</Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(modalFormsStyle)(EditInvoiceModal);
