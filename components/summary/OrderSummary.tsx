import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import {
  emailAtom,
  phoneAtom,
  pickupDelivery as pickupDeliveryAtom,
  city as cityAtom,
  address as addressAtom,
  notes as notesAtom,
  paymentMethod as paymentMethodAtom,
  cart as cartAtom,
} from '../../recoil/recoil-atoms';
import styles from './OrderSummary.module.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const OrderSummary = () => {
  const [email, setEmail] = useRecoilState(emailAtom);
  const [phone, setPhone] = useRecoilState(phoneAtom);
  const [pickupDelivery, setPickupDelivery] = useRecoilState(
    pickupDeliveryAtom
  );
  const [cart, setCart] = useRecoilState(cartAtom);
  const [address, setAddress] = useRecoilState(addressAtom);
  const [city, setCity] = useRecoilState(cityAtom);
  const [notes, setNotes] = useRecoilState(notesAtom);
  const [paymentMethod, setPaymentMethod] = useRecoilState(paymentMethodAtom);

  return (
    <div>
      <Card className={styles.container}>
        <h1>Order Confirmation: </h1>
        <h3>{email !== '' ? email : phone}</h3>

        <div className={styles.pickupDelivery}>
          {pickupDelivery === 'pickup' && (
            <h3>Pick up at: 555 Farmers Market, Windsor, Ontario, CA</h3>
          )}
          {pickupDelivery === 'delivery' && (
            <h3>
              Deliver to: {address}, {city}, Ontario, CA
            </h3>
          )}
        </div>
        <div>
          <div className={styles.secondTextImg}>
            <motion.div variants={fadeInUp}>
              <CardContent>
                {cart.small_box_large_cannoli +
                  cart.small_box_medium_cannoli +
                  cart.small_box_mini_cannoli >
                  0 && (
                  <Typography gutterBottom variant="h5" component="h2">
                    Small Boxes
                  </Typography>
                )}
                {cart.small_box_mini_cannoli > 0 && (
                  <div>
                    {cart.small_box_mini_cannoli} Mini Cannoli Box
                    {cart.small_box_mini_cannoli >= 2 && <span>es</span>}: $
                    {15 * cart.small_box_mini_cannoli}
                  </div>
                )}
                {cart.small_box_medium_cannoli > 0 && (
                  <div>
                    {cart.small_box_medium_cannoli} Medium Cannoli Box
                    {cart.small_box_medium_cannoli >= 2 && <span>es</span>}: $
                    {15 * cart.small_box_medium_cannoli}
                  </div>
                )}
                {cart.small_box_large_cannoli > 0 && (
                  <div>
                    {cart.small_box_large_cannoli} Large Cannoli Box
                    {cart.small_box_large_cannoli >= 2 && <span>es</span>}: $
                    {10 * cart.small_box_large_cannoli}
                  </div>
                )}
              </CardContent>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CardContent>
                {cart.big_box_large_cannoli +
                  cart.big_box_medium_cannoli +
                  cart.big_box_mini_cannoli >
                  0 && (
                  <Typography gutterBottom variant="h5" component="h2">
                    Big Boxes
                  </Typography>
                )}
                {cart.big_box_mini_cannoli > 0 && (
                  <div>
                    {cart.big_box_mini_cannoli} Mini Cannoli Box
                    {cart.big_box_mini_cannoli >= 2 && <span>es</span>}: $
                    {25 * cart.big_box_mini_cannoli}
                  </div>
                )}
                {cart.big_box_medium_cannoli > 0 && (
                  <div>
                    {cart.big_box_medium_cannoli} Medium Cannoli Box
                    {cart.big_box_medium_cannoli >= 2 && <span>es</span>}: $
                    {30 * cart.big_box_medium_cannoli}
                  </div>
                )}
                {cart.big_box_large_cannoli > 0 && (
                  <div>
                    {cart.big_box_large_cannoli} Large Cannolis Box
                    {cart.big_box_large_cannoli >= 2 && <span>es</span>}: $
                    {25 * cart.big_box_large_cannoli}
                  </div>
                )}
              </CardContent>
            </motion.div>
          </div>
        </div>
        {notes !== '' && (
          <div>
            <h2 className={styles.centerNotes}>Notes</h2>
            <p>{notes}</p>
          </div>
        )}
        <div className={styles.paymentMethod}>
          <Typography gutterBottom variant="h5" component="h2">
            <b>Method of Payment: &nbsp;</b>
          </Typography>
          {paymentMethod === 'cash' && (
            <Typography gutterBottom variant="h5" component="h2">
              Cash
            </Typography>
          )}
          {paymentMethod === 'card' && (
            <Typography gutterBottom variant="h5" component="h2">
              Debit / Credit
            </Typography>
          )}
        </div>
      </Card>
      <Button>Back to Home Page</Button>
    </div>
  );
};
