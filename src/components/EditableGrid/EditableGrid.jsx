import React from 'react'

import GridContainer from "components/Grid/GridContainer.jsx";
import EditableGridItem from 'components/EditableGrid/EditableGridItem';

import withStyles from "@material-ui/core/styles/withStyles";
import EditableGridStyle from "assets/jss/components/editableGridStyle.jsx"

const EditableGrid = ({ctrlSpec}) => {
  const {gridFields} = ctrlSpec;
  return(
    <GridContainer>
      {
        gridFields.map((field, key) => {
          return(
            <EditableGridItem itemSpec={field} xs={2} key={key}/>
          )
        })
      }
    </GridContainer>
  )
}

export default withStyles(EditableGridStyle)(EditableGrid);