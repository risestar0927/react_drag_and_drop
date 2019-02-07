import React from 'react'

// core components
import GridItem from "components/Grid/GridItem.jsx";

// style for this view
import withStyles from "@material-ui/core/styles/withStyles";
import gridInvoiceBodyStyle from "assets/jss/components/gridInvoiceBodyStyle.jsx";
class GridHeader extends React.Component {

  state = {
    isClicked: false,
  }

  handleClick = () => {
    const {fieldSpec} = this.props;
    if(fieldSpec.sortable === false){
      return;
    }

    this.props.sortByField(fieldSpec.value);
    this.setState({isClicked: true});
  }

  render(){
    const {classes, fieldSpec, xs} = this.props;
    return(
      <GridItem xs={xs} className={classes.gridItem} onClick={this.handleClick}>
        {fieldSpec.label}
      </GridItem>
    )
  }
}

export default withStyles(gridInvoiceBodyStyle)(GridHeader);