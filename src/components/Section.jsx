import React from 'react'

import GridContainer from 'components/Grid/GridContainer'
import Shapes from 'components/Shapes'

import withStyles from '@material-ui/core/styles/withStyles';
import sectionStyle from 'assets/jss/components/sectionStyle.jsx'

const Section = ({sectionSpec}) => {
  const xs = Math.floor(12 / sectionSpec.columns.length);
  return(
    <GridContainer>
      {
        sectionSpec.columns.map((column, key) => 
          <Shapes shapesSpec={column} xs={xs} key={key}/>)
      }
    </GridContainer>
  )
}
export default withStyles(sectionStyle)(Section);