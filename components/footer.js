const Footer = () => {
  return (
    <footer
      sx={{
        // position: 'absolute',
        right: '50%',
      }}
      style={{
        bottom: 0,
        position: 'fixed',
        fontFamily: "'DM Sans', sans-serif",
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '1rem',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <div>
        {/* <center> */} {'Copyright © CBE '}
        {new Date().getFullYear()}
        {/* </center> */}
      </div>
    </footer>
  );
};

export default Footer;
