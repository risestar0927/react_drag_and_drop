import React from "react";

import Grid from "@material-ui/core/Grid";

const GridItem = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={className}>
      {children}
    </Grid>
  );
}

export default GridItem;
