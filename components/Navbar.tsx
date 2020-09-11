import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useRecoilValue } from 'recoil';
import { cartCount } from '../recoil/recoil-atoms'
import { useInView } from "react-intersection-observer";

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import Badge from '@material-ui/core/Badge';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import LiveHelpSharpIcon from '@material-ui/icons/LiveHelpSharp';
import PhoneIphoneSharpIcon from '@material-ui/icons/PhoneIphoneSharp';


import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import websiteBanner from './navbar.png'

export const Navbar = () => {
  const [ref, inView, entry] = useInView({ threshold: 0.1 });
  const [state, setState] = useState({
    left: false,
  });

  const [appBar, setAppBar]: any = useState("static")

  useEffect(() => {
    if (inView) {
      setAppBar('static')
    } else {
      setAppBar('fixed')
    }
  }, [inView])

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
            <IconButton className={styles.hamburgerButton}
              onClick={toggleDrawer('left', true)}
              edge="start"
              aria-label="menu"
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
            <ListItem button>
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Cannoli Windsor" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LibraryBooksSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Menu" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ShoppingCartSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LiveHelpSharpIcon />
              </ListItemIcon>
              <ListItemText primary="FAQ" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <PhoneIphoneSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </div>
        </SwipeableDrawer>
      </div>
    </div>
  );
};
