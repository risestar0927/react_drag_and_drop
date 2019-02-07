// ##############################
// // // FieldsGrid view styles
// #############################

const gridContainerCommon = {
  paddingTop: '12px',
  paddingBottom: '12px',
  marginLeft: '15px',
  marginRight: '15px',
  borderBottom: '1px solid #DDDDDD',
  width: 'calc(100% - 30px)',
}
const newInvoiceStyle = {
  gridContainerHeader: {
    fontSize: "17px",
    ...gridContainerCommon,
  },
  gridContainerContent: {
    fontSize: "14px",
    ...gridContainerCommon,
  },
  gridItem: {
    cursor: "pointer",
    paddingLeft: '8px !important',
    paddingRight: '8px !important',
  },
  invoiceBody:{
    color: 'rgba(0, 0, 0, 0.87)',
    display: 'flex',
    wordWrap: 'break-word',
    fontSize: '.875rem',
    marginTop: '30px',
    background: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    marginBottom: '30px',
    borderRadius: '6px',
    flexDirection: 'column',
    minHeight: '500px',
    marginLeft: '8px',
    marginRight: '8px',
  }
};

export default newInvoiceStyle;
