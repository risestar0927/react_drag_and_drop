// ##############################
// // // GridInvoiceBody styles
// #############################

const gridContainerCommon = {
  paddingTop: '12px',
  paddingBottom: '12px',
  marginLeft: '15px',
  marginRight: '15px',
  borderBottom: '1px solid #DDDDDD',
  width: 'calc(100% - 30px)',
}

const gridInvoiceBodyStyle = theme => ({
  gridContainerHeader: {
    fontSize: "17px",
    ...gridContainerCommon,
  },
  gridContainerContent: {
    fontSize: "14px",
    ...gridContainerCommon,
  },
  invoiceBody:{
    '& div': {
      '&:nth-child(2)': {
        flex: 1,
      } 
    },
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '500px',
  }
});

export default gridInvoiceBodyStyle;
