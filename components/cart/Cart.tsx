import { useEffect } from 'react';
import { Random } from 'random-js';
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import confetti from 'canvas-confetti';
import emailjs from 'emailjs-com';

import { useRecoilValue, useRecoilState } from 'recoil';
import {
  confirmationCodeAtom,
  cart as cartState,
  cartCount,
  notes,
  submit,
  hstAtom,
  paymentMethod,
  address as addressAtom,
  city as cityAtom,
  pickupDelivery as pickupDeliveryAtom,
  todayLater as todayLaterAtom,
  time as timeAtom,
  emailAtom,
  phoneAtom,
  callTextAtom,
  totalAtom,
} from '../../recoil/recoil-atoms';
import styles from './Cart.module.css';
import { motion } from 'framer-motion';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  withStyles,
} from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';

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

const OrangeRadio = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export const Cart = () => {
  const [confirmationCode, setConfirmationCode] = useRecoilState(
    confirmationCodeAtom
  );
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
  const [hst, setHst] = useRecoilState(hstAtom);
  const [total, setTotal] = useRecoilState(totalAtom);
  const todayLater = useRecoilValue(todayLaterAtom);
  const time: Date = useRecoilValue(timeAtom);
  const [callText, setCallText] = useRecoilState(callTextAtom);

  const handleChange = (event) => {
    setCallText(event.target.value);
  };

  useEffect(() => {
    let total = 0;
    total += cart.small_box_mini_cannoli * 15;
    total += cart.small_box_medium_cannoli * 15;
    total += cart.small_box_large_cannoli * 10;
    total += cart.big_box_mini_cannoli * 25;
    total += cart.big_box_medium_cannoli * 30;
    total += cart.big_box_large_cannoli * 25;

    if (pickupDelivery === 'delivery') {
      total += 7;
    }

    // Calculate taxes
    setHst(total * 0.13);
    setTotal(total * 1.13);
  }, []);

  const handleSubmit = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
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

    const cartStringList = [];
    for (const [key, value] of Object.entries(cart)) {
      let cartString = '';
      if (value > 0) {
        cartString =
          cartString + key.split('_').join(' ') + ': ' + value + ', ';
        const xPos = cartString.indexOf('x');
        cartString =
          cartString.substring(0, xPos + 1) +
          ' of ' +
          cartString.substring(xPos + 1);
        cartStringList.push(cartString);
      }
    }
    if (cartStringList.length >= 1) {
      cartStringList[cartStringList.length - 1] = cartStringList[
        cartStringList.length - 1
      ].replace(', ', '');
    }
    const finalString = cartStringList.join(' ');

    const confirmationChars = '0123456789abcdefghijklmnopqrstuvwxyz';
    const random = new Random();
    let confirmationCode = '';

    for (let i = 0; i < 6; i++) {
      const _alphaNum = [0, 2, 3, 5];
      const _num = [1, 4, 6];

      _alphaNum.forEach((element) => {
        if (i === element) {
          confirmationCode +=
            confirmationChars[random.integer(0, confirmationChars.length - 1)];
        }
      });
      _num.forEach((element) => {
        if (i === element) {
          confirmationCode +=
            confirmationChars[random.integer(0, 9).toString()];
        }
      });
    }

    setConfirmationCode(confirmationCode);

    const timeString =
      time
        .toLocaleTimeString()
        .substring(0, time.toLocaleTimeString().length - 6) +
      time
        .toLocaleTimeString()
        .substring(
          time.toLocaleTimeString().length - 2,
          time.toLocaleTimeString().length
        ) +
      ' ' +
      time.toLocaleDateString();

    const templateParams = {
      confirmationCode: confirmationCode,
      email: email,
      phone: phone,
      callText: callText,
      time: timeString,
      pickupDelivery: pickupDelivery,
      address: address,
      city: city,
      cart: finalString,
      notes: localNotes,
      paymentMethod: paymentOption,
    };

    emailjs
      .send(
        'service_q5i423d',
        'template_2xmrios',
        templateParams,
        'user_qePnePrgB1FYHUjsYaUhJ'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  };

  const handlePayment = (buttonType) => {
    if (buttonType === 'cash') {
      setSubmitButton(false);
      setPaymentOption('cash');
    } else if (buttonType === 'card') {
      setSubmitButton(false);
      setPaymentOption('card');
    }
    // } else if (buttonType === 'etransfer') {
    //   setSubmitButton(false);
    //   setPaymentOption('etransfer');
    // }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  if (localCartCount === 0) {
    return (
      <div className={styles.mainContainer}>
        <Card className={styles.bigCard}>
          <div className={styles.heroText}>
            <h1>Click below to place your order</h1>
          </div>
          <div className={styles.secondTextImg}>
            <motion.div variants={fadeInUp}></motion.div>
            <motion.div variants={fadeInUp}>
              <Card className={styles.cardText}>
                <CardContent>
                  <Link href="/order">
                    <Button>Order Now</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Card>
      </div>
    );
  }
  return (
    <motion.div variants={fadeInUp}>
      <div className={styles.mainContainer}>
        <Card className={styles.bigCard}>
          <div className={styles.heroText}>
            <h1>Cart</h1>
          </div>
          <div>
            {pickupDelivery === 'pickup' && (
              <CardContent className={styles.pickupOrDelivery}>
                Curbside Pickup location is at: 1356 Wyandotte Street East,
                Windsor, Ontario, CA
              </CardContent>
            )}
            {pickupDelivery === 'delivery' && address !== '' && city !== '' && (
              <CardContent className={styles.pickupOrDelivery}>
                Delivered to: {address}, {city}, Ontario, CA
              </CardContent>
            )}
            {pickupDelivery === 'delivery' && (address === '' || city === '') && (
              <CardContent className={styles.pickupOrDelivery}>
                Please enter your address in{' '}
                <Link href="/order">
                  <a className={styles.linkBlue}>order</a>
                </Link>{' '}
                to continue
              </CardContent>
            )}
          </div>
          <div>
            {time === null && (
              <CardContent className={styles.pickupOrDelivery}>
                Please enter a time to receive cannoli
              </CardContent>
            )}
            {time !== null && (
              <CardContent className={styles.pickupOrDelivery}>
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
              </CardContent>
            )}
          </div>
          <div className={styles.secondTextImg}>
            {cart.small_box_mini_cannoli +
              cart.small_box_medium_cannoli +
              cart.small_box_large_cannoli >
              0 && (
              <motion.div variants={fadeInUp}>
                <Card className={styles.cardText}>
                  <CardContent className={styles.cardContent}>
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
                </Card>
              </motion.div>
            )}
            {cart.big_box_mini_cannoli +
              cart.big_box_medium_cannoli +
              cart.big_box_large_cannoli >
              0 && (
              <motion.div variants={fadeInUp}>
                <Card className={styles.cardText}>
                  <CardContent className={styles.cardContent}>
                    {
                      <Typography gutterBottom variant="h5" component="h2">
                        Big Boxes
                      </Typography>
                    }
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
                </Card>
              </motion.div>
            )}
          </div>
          {pickupDelivery === 'delivery' && (
            <CardContent className={styles.deliveryChargeContainer}>
              Delivery Fee: $7
            </CardContent>
          )}
          {localNotes != '' && (
            <div className={styles.centerNote}>
              <h2>Your Note</h2>
              {localNotes}
            </div>
          )}
          <div className={styles.deliveryChargeContainer}>
            HST: ${hst.toFixed(2)}
          </div>
          <div className={styles.heroText}>
            <h2>Your Total: ${total.toFixed(2)}</h2>
          </div>
        </Card>
        <h1 className={styles.textCenter}>Choose Method Of Payment</h1>
        <div className={styles.payment}>
          <Button
            className={
              paymentOption === 'cash'
                ? styles.paymentButtonSelected
                : styles.paymentButton
            }
            onClick={() => handlePayment('cash')}
          >
            Cash
          </Button>

          <Button
            className={
              paymentOption === 'card'
                ? styles.paymentButtonSelected
                : styles.paymentButton
            }
            onClick={() => handlePayment('card')}
          >
            Debit / Credit
          </Button>
        </div>

        {/* {paymentOption === 'card' && (
          <Typography gutterBottom variant="h6" component="h2">
            Payment in person??????
          </Typography>
        )} */}

        {paymentOption === 'etransfer' && (
          <div className={styles.etransferContainer}>
            <Typography gutterBottom variant="h6" component="h2">
              Send to: cannoliwindsor@gmail.com
            </Typography>
            <div className={styles.banksContainer}>
              <a
                href="https://onlinebanking.tdbank.com/#/authentication/login"
                target="_blank"
              >
                <Button>TD Bank</Button>
              </a>
              <a
                href="https://www.cibc.com/en/personal-banking.html"
                target="_blank"
              >
                <Button>CIBC</Button>
              </a>
              <a
                href="https://www1.royalbank.com/cgi-bin/rbaccess/rbcgi3m01?F6=1&F7=IB&F21=IB&F22=IB&REQUEST=ClientSignin&LANGUAGE=ENGLISH&_ga=2.133365070.1117616078.1600969508-1718389869.1600969508"
                target="_blank"
              >
                <Button>RBC</Button>
              </a>
              <a
                href="https://www1.bmo.com/onlinebanking/cgi-bin/netbnx/NBmain?product=5"
                target="_blank"
              >
                <Button>BMO</Button>
              </a>
              <a
                href="https://auth.scotiaonline.scotiabank.com/online?oauth_key=3cBMuknxe7c&oauth_key_signature=eyJraWQiOiJrUFVqdlNhT25GWUVDakpjMmV1MXJvNGxnb2VFeXJJb2tCbU1oX3BiZXNVIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJvYXV0aF9rZXkiOiIzY0JNdWtueGU3YyIsImNvbnNlbnRfcmVxdWlyZWQiOmZhbHNlLCJyZWRpcmVjdF91cmkiOiJodHRwczpcL1wvd3d3LnNjb3RpYW9ubGluZS5zY290aWFiYW5rLmNvbVwvb25saW5lXC9sYW5kaW5nXC9vYXV0aGxhbmRpbmcuYm5zIiwiZXhwIjoxNjAwOTcxMDQ1LCJpYXQiOjE2MDA5Njk4NDUsImp0aSI6IjExMjEzZGQ3LWUwNGEtNDg0Ni04ZTBmLTU2MmVlZDVhOWY4MiIsImNsaWVudF9pZCI6IjhlZTkwYzM5LTFjNTItNGZmNC04YWU2LWE3YjU0YzUzOTkzMyIsImNsaWVudF9tZXRhZGF0YSI6eyJDaGFubmVsSUQiOiJTT0wiLCJBcHBsaWNhdGlvbkNvZGUiOiJINyJ9fQ.s1W4Rtu-ogbPXuP8L5XiKEwJ4gmMMW7WJk9jYXCUUiwsDQnQGwI2KGOjShXxtMLlKxpjRXrcPqPh82baONRzYx1g4sj4Z-XIFTQBBA8Goihpr9OaP4s9D6YuSfqOCFhMZSWTvedpKDjiQb1Rbk628exENI4FCnvSOTj9_BUxZV7V-Uh13MArd6JTSvLQmmJvxUezrj73s6yHboDHSsS0JGHL2L-GVNAL-WJ-Cg3w_5Aw-5_8SaZzB37soRXfLkcsCNJ2lRRTYapBpgpN4vjLO9vqqKXEI6GH9QNOeVkgmlIXm3UOMNfYj3rWMO0Uhyzs-yhCJFcpCJOixV451DSIBg&preferred_environment="
                target="_blank"
              >
                <Button>Scotiabank</Button>
              </a>
            </div>
          </div>
        )}

        <h1 className={styles.textCenter}>Enter Preferred Communication</h1>

        <div className={styles.emailPhoneContainer}>
          <div className={styles.emailPhone}>
            <TextField
              onChange={(event) => handleChangeEmail(event)}
              value={email}
              label="Email"
            />
          </div>
          <div className={styles.orPadding}>or</div>
          <div className={styles.emailPhone}>
            <TextField
              onChange={(event) => handleChangePhone(event)}
              value={phone}
              label="Phone"
            />
          </div>
        </div>
        {phone !== '' && (
          <RadioGroup value={callText} onChange={handleChange}>
            <span>
              <FormControlLabel
                className={styles.checkRadio}
                value="Call"
                control={<OrangeRadio />}
                label="Call"
              />
              <FormControlLabel
                className={styles.checkRadio}
                value="Text"
                control={<OrangeRadio />}
                label="Text"
              />
            </span>
          </RadioGroup>
        )}

        <div className={styles.submitButtonContainer}>
          {(email !== '' || phone !== '') && (
            <div>
              {pickupDelivery === 'delivery' && (
                <Link href="/summary">
                  <Button
                    onClick={handleSubmit}
                    className={
                      submitButton === true || city === '' || address === ''
                        ? styles.submitButtonDisabled
                        : styles.submitButton
                    }
                    disabled={submitButton || city === '' || address === ''}
                  >
                    Submit Order Request
                  </Button>
                </Link>
              )}

              {pickupDelivery === 'pickup' && (
                <Link href="/summary">
                  <Button
                    onClick={handleSubmit}
                    className={
                      submitButton === true
                        ? styles.submitButtonDisabled
                        : styles.submitButton
                    }
                    disabled={submitButton}
                  >
                    Submit Order Request
                  </Button>
                </Link>
              )}

              {pickupDelivery === '' && (
                <Link href="/summary">
                  <Button onClick={handleSubmit} disabled={true}>
                    Submit Order Request
                  </Button>
                </Link>
              )}
            </div>
          )}
          {email === '' && phone === '' && (
            <Link href="/summary">
              <Button onClick={handleSubmit} disabled={true}>
                Submit Order Request
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

{
  /* <Button
  className={
    paymentOption === 'etransfer'
      ? styles.paymentButtonSelected
      : styles.paymentButton
  }
  onClick={() => handlePayment('etransfer')}
>
  Etransfer
</Button>; */
}
