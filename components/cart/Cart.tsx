import Link from 'next/link'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import { cart as cartState } from '../../recoil/recoil-atoms';
import { cartCount } from '../../recoil/recoil-atoms';
import { notes } from '../../recoil/recoil-atoms';
import { submit } from '../../recoil/recoil-atoms';
import { paymentMethod } from '../../recoil/recoil-atoms';

import styles from './Cart.module.css'
import { motion } from 'framer-motion';

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
          <div className={styles.heroText}><h1>Your Total: ${totalPrice().toFixed(2)}</h1></div>
        </Card>
        <h2>Choose Method Of Payment</h2>
        <div className={styles.payment}>
          <Button className={paymentOption === 'cash' ? styles.paymentButtonSelected : styles.paymentButton} onClick={() => handlePayment('cash')}>Cash</Button>
          <Button className={paymentOption === 'card' ? styles.paymentButtonSelected : styles.paymentButton} onClick={() => handlePayment('card')}>Debit / Credit</Button>
        </div>
        <Link href="/summary"><Button className={submitButton === true ? styles.submitButtonDisabled : styles.submitButton} disabled={submitButton}>Submit Your Order</Button></Link>
      </div>
    </motion.div>
  )
}
