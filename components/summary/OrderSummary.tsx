import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  confirmationCodeAtom,
  emailAtom,
  phoneAtom,
  pickupDelivery as pickupDeliveryAtom,
  city as cityAtom,
  address as addressAtom,
  time as timeAtom,
  notes as notesAtom,
  paymentMethod as paymentMethodAtom,
  cart as cartAtom,
  totalAtom,
  hstAtom,
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
import { Link } from '@material-ui/core';

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
  const router = useRouter();
  const [confirmationCode, setConfirmationCode] = useRecoilState(
    confirmationCodeAtom
  );
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
  const [time, setTime] = useRecoilState(timeAtom);
  const [hst, setHst] = useRecoilState(hstAtom);
  const [total, setTotal] = useRecoilState(totalAtom);

  return (
    <div>
      <Card className={styles.container}>
        <Typography
          className={styles.screenshotWarning}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Please screenshot this page for your records
        </Typography>
        <h1>Order Confirmation: {confirmationCode}</h1>
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
          <h3>
            Time:
            {time
              .toLocaleTimeString()
              .substring(0, time.toLocaleTimeString().length - 6)}
            {time
              .toLocaleTimeString()
              .substring(
                time.toLocaleTimeString().length - 2,
                time.toLocaleTimeString().length
              )}{' '}
            {time.toLocaleDateString()}
          </h3>
        </div>
        <div>
          <div className={styles.secondTextImg}>
            <motion.div variants={fadeInUp}>
              {cart.small_box_large_cannoli +
                cart.small_box_medium_cannoli +
                cart.small_box_mini_cannoli >
                0 && (
                <CardContent className={styles.orderSmall}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Small Boxes
                  </Typography>

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
              )}
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CardContent className={styles.order}>
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
                    {cart.big_box_large_cannoli} Large Cannoli Box
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
        <h2>HST: ${hst.toFixed(2)}</h2>
        <h2>Total: ${total.toFixed(2)}</h2>
      </Card>
      <div className={styles.refreshButton}>
        <Link href="/">
          <a>
            <Button
              className={styles.submitButton}
              onClick={() => router.reload()}
            >
              Back to Home Page
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};
