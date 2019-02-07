import React from "react";

import Grid from "@material-ui/core/Grid";

const GridContainer = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={className}>
      {children}
    </Grid>
  );
}

export default GridContainer;
