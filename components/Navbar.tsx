import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useRecoilValue } from 'recoil';
import { cartCount } from '../recoil/recoil-atoms';
import { useInView } from 'react-intersection-observer';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import Badge from '@material-ui/core/Badge';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import PhoneIphoneSharpIcon from '@material-ui/icons/PhoneIphoneSharp';
import StoreIcon from '@material-ui/icons/Store';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import websiteBanner from './navbar.png';

export const Navbar = () => {
  const [ref, inView, entry] = useInView({ threshold: 0.1 });
  const [state, setState] = useState({
    left: false,
  });

  const [appBar, setAppBar]: any = useState('static');

  useEffect(() => {
    if (inView) {
      setAppBar('static');
    } else {
      setAppBar('fixed');
    }
  }, [inView]);

  //   if (inView) {
  //     animation.start("visible");
  //   } else {
  //     animation.start("hidden");
  //   }
  // }, [animation, inView]);

  const localCartCount = useRecoilValue(cartCount);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <div className={styles.imageContainer}>
        <img
          ref={ref}
          className={styles.navImage}
          src={websiteBanner}
          alt="cannoli windsor"
        />
      </div>
      <AppBar className={styles.appbar} position={appBar}>
        <Toolbar className={styles.toolbar}>
          <div className={styles.toolbarBody}>
            <IconButton
              className={styles.hamburgerButton}
              onClick={toggleDrawer('left', true)}
              edge="start"
              aria-label="order"
            >
              <MenuIcon />
            </IconButton>
            <div className={styles.mainButtons}>
              <Link href="/">
                <Button disableElevation>
                  <a>Home</a>
                </Button>
              </Link>
              <Link href="/menu">
                <Button disableElevation>
                  <a>Menu</a>
                </Button>
              </Link>
              <Link href="/order">
                <Button disableElevation>
                  <a>Order</a>
                </Button>
              </Link>
              <Link href="/cart">
                <Button disableElevation>
                  <a>Cart</a>
                  <Badge badgeContent={localCartCount} color="error">
                    <ShoppingCartSharpIcon className={styles.cartIcon} />
                  </Badge>
                </Button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <div>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
          className={styles.drawerShadowBackground}
        >
          <div className={styles.drawerMenu}>
            <Link href="/">
              <ListItem button onClick={toggleDrawer('left', false)}>
                <ListItemIcon>
                  <HomeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Cannoli Windsor" />
              </ListItem>
            </Link>

            <Link href="/menu">
              <ListItem button onClick={toggleDrawer('left', false)}>
                <ListItemIcon>
                  <LibraryBooksSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Menu" />
              </ListItem>
            </Link>

            <Link href="/order">
              <ListItem button onClick={toggleDrawer('left', false)}>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Order" />
              </ListItem>
            </Link>

            <Link href="/cart">
              <ListItem button onClick={toggleDrawer('left', false)}>
                <ListItemIcon>
                  <ShoppingCartSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItem>
            </Link>

            <Link href="/contact">
              <ListItem button onClick={toggleDrawer('left', false)}>
                <ListItemIcon>
                  <PhoneIphoneSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </Link>
          </div>
        </SwipeableDrawer>
      </div>
    </div>
  );
};
