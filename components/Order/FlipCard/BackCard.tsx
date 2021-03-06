import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { Button, Card, CardContent, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { cart } from '../../../recoil/recoil-atoms';

import styles from './BackCard.module.css';

export const BackCard = ({ handleCardFlip }) => {
  const [cartItems, setCartItems] = useRecoilState(cart);

  const handleAddBox = (boxAndCannoliSize) => {
    if (boxAndCannoliSize === 1) {
      const cartItemsNew = {
        ...cartItems,
        small_box_mini_cannoli: cartItems.small_box_mini_cannoli + 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (boxAndCannoliSize === 2) {
      const cartItemsNew = {
        ...cartItems,
        small_box_medium_cannoli: cartItems.small_box_medium_cannoli + 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (boxAndCannoliSize === 3) {
      const cartItemsNew = {
        ...cartItems,
        small_box_large_cannoli: cartItems.small_box_large_cannoli + 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (boxAndCannoliSize === 4) {
      const cartItemsNew = {
        ...cartItems,
        big_box_mini_cannoli: cartItems.big_box_mini_cannoli + 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (boxAndCannoliSize === 5) {
      const cartItemsNew = {
        ...cartItems,
        big_box_medium_cannoli: cartItems.big_box_medium_cannoli + 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (boxAndCannoliSize === 6) {
      const cartItemsNew = {
        ...cartItems,
        big_box_large_cannoli: cartItems.big_box_large_cannoli + 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (boxAndCannoliSize === 7) {
      const cartItemsNew = {
        ...cartItems,
        vegan_cannoli: cartItems.vegan_cannoli + 1,
      };
      setCartItems({ ...cartItemsNew });
    }
  };

  const handleRemoveBox = (boxAndCannoliSize) => {
    if (boxAndCannoliSize === 1 && cartItems.small_box_mini_cannoli > 0) {
      const cartItemsNew = {
        ...cartItems,
        small_box_mini_cannoli: cartItems.small_box_mini_cannoli - 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (
      boxAndCannoliSize === 2 &&
      cartItems.small_box_medium_cannoli > 0
    ) {
      const cartItemsNew = {
        ...cartItems,
        small_box_medium_cannoli: cartItems.small_box_medium_cannoli - 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (
      boxAndCannoliSize === 3 &&
      cartItems.small_box_large_cannoli > 0
    ) {
      const cartItemsNew = {
        ...cartItems,
        small_box_large_cannoli: cartItems.small_box_large_cannoli - 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (boxAndCannoliSize === 4 && cartItems.big_box_mini_cannoli > 0) {
      const cartItemsNew = {
        ...cartItems,
        big_box_mini_cannoli: cartItems.big_box_mini_cannoli - 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (
      boxAndCannoliSize === 5 &&
      cartItems.big_box_medium_cannoli > 0
    ) {
      const cartItemsNew = {
        ...cartItems,
        big_box_medium_cannoli: cartItems.big_box_medium_cannoli - 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (boxAndCannoliSize === 6 && cartItems.big_box_large_cannoli > 0) {
      const cartItemsNew = {
        ...cartItems,
        big_box_large_cannoli: cartItems.big_box_large_cannoli - 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (boxAndCannoliSize === 7 && cartItems.vegan_cannoli > 0) {
      const cartItemsNew = {
        ...cartItems,
        vegan_cannoli: cartItems.vegan_cannoli - 1,
      };
      setCartItems({ ...cartItemsNew });
    }
  };

  return (
    <div key="back">
      <Card className={styles.card}>
        <CardContent>
          <Typography
            className={styles.centerTitle}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Boxes
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Small Box
          </Typography>
          <div className={styles.sizeChoices}>
            <div>
              <Button
                className={styles.subButton}
                onClick={() => handleRemoveBox(1)}
              >
                <RemoveIcon />
              </Button>
              <Button
                className={styles.sizeButton}
                onClick={() => handleAddBox(1)}
              >
                <AddIcon />
                &nbsp;Mini (6)
              </Button>
            </div>
            <div>
              <Button
                className={styles.subButton}
                onClick={() => handleRemoveBox(2)}
              >
                <RemoveIcon />
              </Button>
              <Button
                className={styles.sizeButton}
                onClick={() => handleAddBox(2)}
              >
                <AddIcon />
                &nbsp;Medium (4)
              </Button>
            </div>
            <div>
              <Button
                className={styles.subButton}
                onClick={() => handleRemoveBox(3)}
              >
                <RemoveIcon />
              </Button>
              <Button
                className={styles.sizeButton}
                onClick={() => handleAddBox(3)}
              >
                <AddIcon />
                &nbsp;Large (2)
              </Button>
            </div>
          </div>
          <Typography variant="h6" color="textSecondary" component="p">
            Vegan
          </Typography>
          <div>
            <Button
              className={styles.subButton}
              onClick={() => handleRemoveBox(7)}
            >
              <RemoveIcon />
            </Button>
            <Button
              className={styles.sizeButton}
              onClick={() => handleAddBox(7)}
            >
              <AddIcon />
              &nbsp;Vegan (3)
            </Button>
          </div>
          <Typography variant="h6" color="textSecondary" component="p">
            Big Box
          </Typography>
          <div className={styles.sizeChoices}>
            <div>
              <Button
                className={styles.subButton}
                onClick={() => handleRemoveBox(4)}
              >
                <RemoveIcon />
              </Button>
              <Button
                className={styles.sizeButton}
                onClick={() => handleAddBox(4)}
              >
                <AddIcon />
                &nbsp;Mini (10)
              </Button>
            </div>
            <div>
              <Button
                className={styles.subButton}
                onClick={() => handleRemoveBox(5)}
              >
                <RemoveIcon />
              </Button>
              <Button
                className={styles.sizeButton}
                onClick={() => handleAddBox(5)}
              >
                <AddIcon />
                &nbsp;Medium (8)
              </Button>
            </div>
            <div>
              <Button
                className={styles.subButton}
                onClick={() => handleRemoveBox(6)}
              >
                <RemoveIcon />
              </Button>
              <Button
                className={styles.sizeButton}
                onClick={() => handleAddBox(6)}
              >
                <AddIcon />
                &nbsp;Large (5)
              </Button>
            </div>
          </div>
        </CardContent>

        <div className={styles.grow}></div>
        <Button className={styles.buttonFlip} onClick={handleCardFlip}>
          View Picture
        </Button>
      </Card>
    </div>
  );
};
