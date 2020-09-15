import Link from 'next/link'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import confetti from 'canvas-confetti';

import { useRecoilValue, useRecoilState } from 'recoil';
import { cart as cartState, cartCount, notes, submit, paymentMethod, address as addressAtom, city as cityAtom, pickupDelivery as pickupDeliveryAtom, emailAtom, phoneAtom } from '../../recoil/recoil-atoms';
import styles from './Cart.module.css'
import { motion } from 'framer-motion';
import { TextField } from '@material-ui/core';

const easing = [.6, -.05, .01, .99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing
    }
  }
}

export const Cart = () => {
  const localCartCount = useRecoilValue(cartCount);
  const localNotes = useRecoilValue(notes);
  const [cart, setCart] = useRecoilState(cartState);
  const [submitButton, setSubmitButton] = useRecoilState(submit);
  const [paymentOption, setPaymentOption] = useRecoilState(paymentMethod);
  const address = useRecoilValue(addressAtom);
  const city = useRecoilValue(cityAtom);
  const pickupDelivery = useRecoilValue(pickupDeliveryAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [phone, setPhone] = useRecoilState(phoneAtom);



  const totalPrice = () => {
    let total = 0;
    total += cart.small_box_mini_cannoli * 15;
    total += cart.small_box_medium_cannoli * 15;
    total += cart.small_box_large_cannoli * 10;
    total += cart.big_box_mini_cannoli * 25;
    total += cart.big_box_medium_cannoli * 30;
    total += cart.big_box_large_cannoli * 25;

    return total;
  }
  const handleSubmit = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  const handlePayment = (buttonType) => {
    if (buttonType === 'cash') {
      setSubmitButton(false)
      setPaymentOption('cash')
    }
    else if (buttonType === 'card') {
      setSubmitButton(false)
      setPaymentOption('card')
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePhone = (event) => {
    setPhone(event.target.value)
  }

  if (localCartCount === 0) {
    return <div className={styles.mainContainer}>
      <Card className={styles.bigCard}>
        <div className={styles.heroText}><h1>You have no cannolis :(</h1></div>
        <div className={styles.secondTextImg}>
          <motion.div variants={fadeInUp}>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className={styles.cardText}>
              <CardContent>
                <Link href="/menu">
                  <Button>View Menu</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Card>
    </div>
  }
  return (
    <motion.div variants={fadeInUp}>
      <div className={styles.mainContainer}>
        <Card className={styles.bigCard}>
          <div className={styles.heroText}><h1>Cart</h1></div>
          <div>
            {pickupDelivery === 'pickup' && <CardContent className={styles.pickupOrDelivery}>
              Pickup at: 555 Farmers Market, Windsor, Ontario, CA
            </CardContent>}
            {pickupDelivery === 'delivery' && < CardContent className={styles.pickupOrDelivery}>
              Delivered to: {address}, {city}, Ontario, CA
            </CardContent>}
          </div>
          <div className={styles.secondTextImg}>
            <motion.div variants={fadeInUp}>
              <Card className={styles.cardText}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Small Boxes
                  </Typography>
                  {cart.small_box_mini_cannoli > 0 && <div>
                    {cart.small_box_mini_cannoli} Mini Cannoli Box{cart.small_box_mini_cannoli >= 2 && <span>es</span>}: ${15 * cart.small_box_mini_cannoli}
                  </div>}
                  {cart.small_box_medium_cannoli > 0 && <div>
                    {cart.small_box_medium_cannoli} Medium Cannoli Box{cart.small_box_medium_cannoli >= 2 && <span>es</span>}: ${15 * cart.small_box_medium_cannoli}
                  </div>}
                  {cart.small_box_large_cannoli > 0 && <div>
                    {cart.small_box_large_cannoli} Large Cannoli Box{cart.small_box_large_cannoli >= 2 && <span>es</span>}: ${10 * cart.small_box_large_cannoli}
                  </div>}
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className={styles.cardText}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Big Boxes
                  </Typography>
                  {cart.big_box_mini_cannoli > 0 && <div>
                    {cart.big_box_mini_cannoli} Mini Cannoli Box{cart.big_box_mini_cannoli >= 2 && <span>es</span>}: ${25 * cart.big_box_mini_cannoli}
                  </div>}
                  {cart.big_box_medium_cannoli > 0 && <div>
                    {cart.big_box_medium_cannoli} Medium Cannoli Box{cart.big_box_medium_cannoli >= 2 && <span>es</span>}: ${30 * cart.big_box_medium_cannoli}
                  </div>}
                  {cart.big_box_large_cannoli > 0 && <div>
                    {cart.big_box_large_cannoli} Large Cannolis Box{cart.big_box_large_cannoli >= 2 && <span>es</span>}: ${25 * cart.big_box_large_cannoli}
                  </div>}
                </CardContent>
              </Card>
            </motion.div>
          </div>
          {localNotes != "" && <div>
            <h2>Your Note</h2>
            {localNotes}
          </div>}
          <div className={styles.heroText}><h2>Your Total: ${totalPrice().toFixed(2)}</h2></div>
        </Card>
        <h1>Choose Method Of Payment</h1>
        <div className={styles.payment}>
          <Button className={paymentOption === 'cash' ? styles.paymentButtonSelected : styles.paymentButton} onClick={() => handlePayment('cash')}>Cash</Button>
          <Button className={paymentOption === 'card' ? styles.paymentButtonSelected : styles.paymentButton} onClick={() => handlePayment('card')}>Debit / Credit</Button>
        </div>

        <h1>Enter Email or Phone Number</h1>

        <div className={styles.emailPhoneContainer}>
          <div className={styles.emailPhone}><TextField onChange={(event) => handleChangeEmail(event)} value={email} label="Email" /></div>
          <div className={styles.orPadding}>or</div>
          <div className={styles.emailPhone}><TextField onChange={(event) => handleChangePhone(event)} value={phone} label="Phone" /></div>
        </div>

        <div className={styles.submitButtonContainer}>
          {(email !== '' || phone !== '') && <div>
            {pickupDelivery === "delivery" && <Link href="/summary">
              <Button onClick={handleSubmit}
                className={submitButton === true || city === "" || address === "" ? styles.submitButtonDisabled : styles.submitButton}
                disabled={submitButton || city === "" || address === ""}>Submit Your Order</Button>
            </Link>}

            {pickupDelivery === "pickup" && <Link href="/summary">
              <Button onClick={handleSubmit}
                className={submitButton === true ? styles.submitButtonDisabled : styles.submitButton}
                disabled={submitButton}>Submit Your Order</Button>
            </Link>}

            {pickupDelivery === "" && <Link href="/summary">
              <Button onClick={handleSubmit}
                disabled={true}>Submit Your Order</Button>
            </Link>}
          </div>}
          {(email === '' && phone === '') && <Link href="/summary">
            <Button onClick={handleSubmit}
              disabled={true}>Submit Your Order</Button>
          </Link>}
        </div>
      </div>
    </motion.div >
  )
}
