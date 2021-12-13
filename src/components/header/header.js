/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
// import { Link } from 'react-scroll';
import Logo from 'components/logo';
// import styles from '../../../styles/Home.module.css';

// import LogoDark from "assets/logo.svg";
import MobileDrawer from './mobile-drawer';
// import menuItems from "./header.data";
import { Box } from 'theme-ui';
// import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Link from 'next/link';

// const menuItems = [
//   {
//     path: "/",
//     label: 'Home',
//   },
//   {
//     path: 'contact',
//     label: 'Contact',
//   },
//   {
//     path: 'concert',
//     label: 'Concert',
//   },
//   {
//     path: 'testimonial',
//     label: 'Testimonial',
//   },
// ];
export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className}>
      <container sx={styles.container}>
        {/* <Logo src={LogoDark} /> */}
        <Flex as="nav" sx={styles.nav}>
          <Box sx={styles.content}>
            <Box sx={styles.nav.a}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>About Us</a>
              </Link>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
              <Link href="/confirmation">
                <a>Steps</a>
              </Link>

              {/* {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link> */}
              {/* ))}  */}
            </Box>
          </Box>
        </Flex>

        <MobileDrawer />
      </container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: '',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      fontFamily: "'DM Sans', sans-serif",
      px: 2,
      color: 'black',
      textDecoration: 'none',
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: '#000000',
      },
      '&.active': {
        color: '#000000',
      },
    },
  },
};
