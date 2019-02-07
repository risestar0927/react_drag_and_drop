import React, {Component} from 'react'
import GridItem from "components/Grid/GridItem.jsx"

import Input from '@material-ui/core/Input';

//styles
import withStyles from "@material-ui/core/styles/withStyles";
import editableGridItemStyle from "assets/jss/components/editableGridItemStyle.jsx";

import {DataTypes} from 'constants.js'

class EditableGridItem extends Component{
  constructor(props){
    super(props);

    const {itemSpec} = props;
    this.state = {
      isClicked: false,
      value: itemSpec.value,
    }
  }

  handleKeyPressed = e => {
    if (e.key !== 'Enter')
      return;
    const isClicked = false;
    this.setState({isClicked})
  }

  handleInputBlur = () => {
    const isClicked = false;
    this.setState({isClicked});
  }

  handleChangeValue = e => {
    this.setState({value: e.target.value});
  }

  handleClick = () => {
    const isClicked = true;
    this.setState({isClicked});
  }  
  
  render(){
    const {xs, itemSpec, classes} = this.props;
    const {isClicked, value} = this.state;
    if(itemSpec.inLineEdit === true)
      return (
        <GridItem xs={xs} className={classes.gridItem} onClick={this.handleClick}>
          {isClicked === false && value}
          {isClicked === true && 
            <Input 
              value={value}
              autoFocus={true}
              onKeyPress={e => this.handleKeyPressed(e)}
              onChange={e => this.handleChangeValue(e)}
              onBlur={this.handleInputBlur}
              className={classes.inputCtrl + " nonDraggable"}
              type={DataTypes[itemSpec.dataType - 1]}
              fullWidth
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
export default withStyles(editableGridItemStyle)(EditableGridItem);