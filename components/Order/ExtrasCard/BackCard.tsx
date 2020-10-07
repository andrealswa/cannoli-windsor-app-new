import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { Button, Card, CardContent, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { cart } from '../../../recoil/recoil-atoms';

import styles from './BackCard.module.css';

export const BackCard = ({ handleCardFlip }) => {
  const [cartItems, setCartItems] = useRecoilState(cart);

  const handleAddCard = (cardType) => {
    if (cardType === 'I Cannoli Love You') {
      const cartItemsNew = {
        ...cartItems,
        i_cannoli_love_you: cartItems.i_cannoli_love_you + 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (cardType === 'Have A Sweet Birthday') {
      const cartItemsNew = {
        ...cartItems,
        have_a_sweet_birthday: cartItems.have_a_sweet_birthday + 1,
      };
      setCartItems({ ...cartItemsNew });
    }
  };

  const handleRemoveCard = (cardType) => {
    if (cardType === 'I Cannoli Love You' && cartItems.i_cannoli_love_you > 0) {
      const cartItemsNew = {
        ...cartItems,
        i_cannoli_love_you: cartItems.i_cannoli_love_you - 1,
      };
      setCartItems({ ...cartItemsNew });
    } else if (
      cardType === 'Have A Sweet Birthday' &&
      cartItems.have_a_sweet_birthday > 0
    ) {
      const cartItemsNew = {
        ...cartItems,
        have_a_sweet_birthday: cartItems.have_a_sweet_birthday - 1,
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
            All Cards
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            "I Cannoli Love You"
          </Typography>
          <div className={styles.sizeChoices}>
            <div>
              <Button
                className={styles.subButton}
                onClick={() => handleRemoveCard('I Cannoli Love You')}
              >
                <RemoveIcon />
              </Button>
              <Button
                className={styles.sizeButton}
                onClick={() => handleAddCard('I Cannoli Love You')}
              >
                <AddIcon />
                &nbsp;Card ($1)
              </Button>
            </div>
          </div>
          <Typography variant="h6" color="textSecondary" component="p">
            "Have A Sweet Birthday"
          </Typography>
          <div className={styles.sizeChoices}>
            <div>
              <Button
                className={styles.subButton}
                onClick={() => handleRemoveCard('Have A Sweet Birthday')}
              >
                <RemoveIcon />
              </Button>
              <Button
                className={styles.sizeButton}
                onClick={() => handleAddCard('Have A Sweet Birthday')}
              >
                <AddIcon />
                &nbsp;Card ($1)
              </Button>
            </div>
          </div>
        </CardContent>
        <Typography
          style={{ textAlign: 'center' }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Add on our sweet cards for only $1!
        </Typography>

        <div className={styles.grow}></div>
        <Button className={styles.buttonFlip} onClick={handleCardFlip}>
          View Picture
        </Button>
      </Card>
    </div>
  );
};
