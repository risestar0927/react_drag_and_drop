import React from 'react'
import GridItem from "components/Grid/GridItem.jsx"

import Input from '@material-ui/core/Input';

//styles
import withStyles from "@material-ui/core/styles/withStyles";
import productLineStyle from "assets/jss/components/productLineStyle.jsx";
import {DataTypes} from "constants.js"
class Field extends React.Component{
  constructor(props){
    super(props);

    const {itemSpec} = props;
    this.state = {
      isClicked: false,
      value: itemSpec.value,
    }
  }

  handleKeyPressed = (e) => {
    const {fieldSpec} = this.props;
    if (e.key !== 'Enter')
      return;
    const isClicked = false;
    this.setState({isClicked})
    this.props.onValueChanged(this.state.value, fieldSpec.value);
  }

  handleInputBlur = () => {
    const {fieldSpec} = this.props;
    const isClicked = false;
    this.setState({isClicked});
    this.props.onValueChanged(this.state.value, fieldSpec.value);
  }

  handleChangeValue = e => {
    this.setState({value: e.target.value});
  }

  handleClick = () => {
    const isClicked = true;
    this.setState({isClicked});
  }  
  
  render(){
    const {xs, fieldSpec, classes} = this.props;
    const {isClicked, value} = this.state;
    if(fieldSpec.inLineEdit === true)
      return (
        <GridItem xs={xs} className={classes.gridItem} >
          {isClicked === false && value}
          {isClicked === true && 
            <Input 
              value={value}
              autoFocus={true}
              onKeyPress={e => this.handleKeyPressed(e)}
              onChange={e => this.handleChangeValue(e)}
              onBlur={this.handleInputBlur}
              className={classes.inputCtrl + " nonDraggable"}
              type={DataTypes[fieldSpec.dataType - 1]}
            />
          }
        </GridItem>
      )
    else
      return(
        <GridItem xs={xs} className={classes.gridItem}>
          {value}  
        </GridItem>
      )
    
  }
}
export default withStyles(productLineStyle)(Field);