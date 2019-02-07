// ##############################
// // // ProductLine styles
// #############################

const gridContainerCommon = {
  paddingTop: '8px',
  paddingBottom: '8px',
  marginLeft: '15px',
  marginRight: '15px',
  borderBottom: '1px solid #DDDDDD',
  width: 'calc(100% - 30px)',
}
const button = {
  padding: '5px',
  minHeight: "auto",
  minWidth: "auto",
}
const productLineStyle = theme => ({
  container: {
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: '10px',
    paddingRight: '10px',
    border: '1px solid #1a1a1a',
    marginTop: '5px',
    marginBottom: '5px',
  },
  gridContainerContent: {
    fontSize: "14px",
    minHeight: '47px',
    ...gridContainerCommon,
  },
  gridItem: {
    cursor: "pointer",
    paddingLeft: '8px !important',
    paddingRight: '8px !important',
    lineHeight: '28px',
  },
  editButton: {
    ...button,
    width: '28px',
    height: '28px',
    backgroundColor: '#4caf50',
    boxShadow: "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: '#4caf50',
      boxShadow: "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    }
  },
  closeButton: {
    ...button,
    width: '28px',
    height: '28px',
    backgroundColor: '#f44336',
    boxShadow: "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: '#f44336',
      boxShadow: "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    }
  },
  icon: {
    verticalAlign: "middle",
    width: "17px",
    height: "17px",
    top: "-1px",
    position: "relative",
    color: '#ffffff',
  },
  inputCtrl: {
    width: '100%',
    fontSize: '14px'
  }
});

export default productLineStyle;
