// ##############################
// // // ModalForm styles
// #############################

const modalFormsStyle = {
  card: {
    color: 'rgba(0, 0, 0, 0.87)',
    width: '100%',
    display: 'flex',
    wordWrap: 'break-word',
    fontSize: '.875rem',
    marginTop: '30px',
    background: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    marginBottom: '30px',
    borderRadius: '6px',
    flexDirection: 'column',
    paddingBottom: '30px',
  },
  iconContainer: {
    background: 'linear-gradient(60deg, #ec407a, #d81b60) ',
    color: '#fff',
    padding: '25px',
    marginLeft: '15px',
    marginRight: '10px',
    marginTop: '-20px',
    borderRadius: '3px',
    display: 'block',
    float: 'left',
  },
  dlgTitle: {
    color: '#3C4858',
    marginTop: '15px',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
  },
  labelHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "10px !important",
    marginRight: "0",
    justifyContent: 'flex-end',
  },
  gridContainer: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  btnDlgCommon: {
    padding: "12px 30px",
    background: '#e91e63',
    boxShadow: "0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    fontSize: '14px',
    color: '#fff',
    touchAction: "manipulation",
    '&:hover,&:focus': {
      background: '#e91e63',
      boxShadow: '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)',
    }
  }
};

export default modalFormsStyle;
