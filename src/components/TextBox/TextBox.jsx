import React from 'react'

import Input from '@material-ui/core/Input'

import withStyles from "@material-ui/core/styles/withStyles";
import textBoxStyle from "assets/jss/components/textBoxStyle.jsx"

import {TextTypes} from 'constants.js'

const TextBox = ({ctrlSpec}) => {
  return(
    <Input
      defaultValue={ctrlSpec.value}
      type={TextTypes[ctrlSpec.type]}
      multiline={true}
    />
  )
}

export default withStyles(textBoxStyle)(TextBox);