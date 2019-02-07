import React from 'react'

import TextBox from './TextBox/TextBox';
import EditableGrid from './EditableGrid/EditableGrid';

import { withStyles } from '@material-ui/core';
import shapeStyle from 'assets/jss/components/shapeStyle.jsx'

const Shape = ({shapeSpec}) => {
    switch(shapeSpec.type){
      case 1:
      return <TextBox ctrlSpec={shapeSpec} />
      case 44:
      return <EditableGrid ctrlSpec={shapeSpec} />
      default:
      return <TextBox ctrlSpec={shapeSpec} />
    }
  }

export default withStyles(shapeStyle)(Shape);