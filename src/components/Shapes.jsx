import React from 'react'

import GridItem from 'components/Grid/GridItem';
import Shape from 'components/Shape';

import { withStyles } from '@material-ui/core';
import shapesStyle from 'assets/jss/components/shapesStyle.jsx'

const Shapes = ({shapesSpec, xs}) => {
  return(
    <GridItem xs={xs}>
    { 
      shapesSpec.shapes.map((shape, key) => 
        <Shape shapeSpec={shape} key={key}/>)
    }
    </GridItem>
  )
}

export default withStyles(shapesStyle)(Shapes);