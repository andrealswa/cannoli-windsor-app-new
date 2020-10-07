import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  nameAtom,
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
import { Link as MatLink } from '@material-ui/core';

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
  const [name, setName] = useRecoilState(nameAtom);
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
      <div className={styles.textWrapper}>
        <div className={styles.textContainer}>
          <Typography
            className={styles.screenshotWarning}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Congrats on completing an order request for Cannoli Windsor!
          </Typography>
          <Typography
            className={styles.screenshotWarning}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Please note that your order request has been sent to us for review.
            You have submitted an order REQUEST. You will be contacted via your
            preferred method of communication within 2 hours. Orders will be
            accepted while supplies last.
          </Typography>
          <Typography
            className={styles.screenshotWarning}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Keep your confirmation number for your records. If you'd like to
            modify or cancel an order request please contact us.
          </Typography>
        </div>
      </div>
      <Card className={styles.container}>
        <h1 className={styles.h1Styles}>
          Order Confirmation Request Code: {confirmationCode}
        </h1>
        <h3>{email !== '' ? email : phone}</h3>

        <div className={styles.orderSummaryColumnContainer}>
          <div className={styles.pickupDelivery}>
            {pickupDelivery === 'pickup' && (
              <h3>Pickup At Corner of Moy Avenue & Wyandotte St. E</h3>
            )}
            {pickupDelivery === 'delivery' && (
              <h3>
                Deliver to: {address}, {city}, Ontario, CA
              </h3>
            )}
          </div>
          <div>
            <h3>
              Time:{' '}
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
            <div className={styles.orderSummaryContainer}>
              <motion.div variants={fadeInUp}>
                {cart.small_box_large_cannoli +
                  cart.small_box_medium_cannoli +
                  cart.small_box_mini_cannoli >
                  0 && (
                  <CardContent className={styles.order}>
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
                        {cart.small_box_medium_cannoli >= 2 && <span>es</span>}:
                        ${15 * cart.small_box_medium_cannoli}
                      </div>
                    )}
                    {cart.small_box_large_cannoli > 0 && (
                      <div>
                        {cart.small_box_large_cannoli} Large Cannoli Box
                        {cart.small_box_large_cannoli >= 2 && <span>es</span>}:
                        ${10 * cart.small_box_large_cannoli}
                      </div>
                    )}
                  </CardContent>
                )}
              </motion.div>
              <motion.div variants={fadeInUp}>
                {cart.vegan_cannoli + cart.vegan_cannoli + cart.vegan_cannoli >
                  0 && (
                  <CardContent className={styles.order}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Vegan Boxes
                    </Typography>

                    {cart.vegan_cannoli > 0 && (
                      <div>
                        {cart.vegan_cannoli} Vegan Cannoli Box
                        {cart.vegan_cannoli >= 2 && <span>es</span>}: $
                        {10 * cart.vegan_cannoli}
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
            <motion.div variants={fadeInUp}>
              {cart.i_cannoli_love_you + cart.have_a_sweet_birthday > 0 && (
                <CardContent className={styles.order}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cards
                  </Typography>
                  {cart.i_cannoli_love_you > 0 && (
                    <div>
                      {cart.i_cannoli_love_you} "I Cannoli Love You" : $
                      {1 * cart.i_cannoli_love_you}
                    </div>
                  )}
                  {cart.have_a_sweet_birthday > 0 && (
                    <div>
                      {cart.have_a_sweet_birthday} "Have A Sweet Birthday" : $
                      {1 * cart.have_a_sweet_birthday}
                    </div>
                  )}
                </CardContent>
              )}
            </motion.div>
          </div>

          {notes !== '' && (
            <div className={styles.notes}>
              <Typography gutterBottom variant="h5" component="h2">
                Notes: {notes}
              </Typography>
            </div>
          )}
          <div className={styles.paymentMethod}>
            <Typography gutterBottom variant="h5" component="h2">
              Method of Payment: &nbsp;
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
            {paymentMethod === 'etransfer' && (
              <Typography gutterBottom variant="h5" component="h2">
                Etransfer
              </Typography>
            )}
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            HST: ${hst.toFixed(2)}
          </Typography>
        </div>
        <h2>Total: ${total.toFixed(2)}</h2>
      </Card>
      <div className={styles.refreshButton}>
        <MatLink href="/">
          <Button
            className={styles.submitButton}
            onClick={() => router.reload()}
          >
            <a>Back to Home Page</a>
          </Button>
        </MatLink>
      </div>
    </div>
  );
};
