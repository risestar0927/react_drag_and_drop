import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

//styles
import newInvoiceStyle from "assets/jss/views/newInvoiceStyle.jsx";

//views
import NewInvoice from "views/NewInvoice.jsx"

import { connect } from 'react-redux';
import { createMapStateToProps } from 'helpers/redux';
import {fetchProducts} from 'redux/actions/product'
import {fetchShape} from 'redux/actions/shape'
const mapStateToProps = createMapStateToProps(['shape']);
const mapDispatchToProps = {fetchProducts, fetchShape};

class Dashboard extends React.Component
{ 
  async componentDidMount(){
    await this.props.fetchShape();
    await this.props.fetchProducts();
  }

  render(){
    const {shape} = this.props;
    if(shape.isLoading === true)
      return null;
    return (
      <NewInvoice />
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(newInvoiceStyle)(Dashboard));
