/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import Footer from './footer/footer';
import { height } from '@mui/material/node_modules/@mui/system';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    // <React.Fragment>
    <div style={{ maxHeight: '90vh' }}>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        {/* <title>{title? `${title} - Ticket` : 'ticketing system'} </title> */}
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>

      <main id="content" sx={{ variant: 'layout.main' }}>
        {children}
      </main>
      <footer
        sx={{
          textAlign: 'center',
          bottom: 2,
          position: 'absolute',
          right: '50%',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {' '}
        {'Copyright © '}
        {new Date().getFullYear()}
      </footer>
      {/* </React.Fragment> */}
    </div>
  );
}
