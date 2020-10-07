import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { motion, useAnimation } from 'framer-motion';

import { useRecoilState } from 'recoil';

import {
  pickupDelivery,
  address as addressAtom,
  city as cityAtom,
} from '../../recoil/recoil-atoms';
import styles from './PickupDelivery.module.css';

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
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const PickupDelivery = () => {
  const [pickupDeliveryLocal, setPickupDeliveryLocal] = useRecoilState(
    pickupDelivery
  );
  const [address, setAddress] = useRecoilState(addressAtom);
  const [city, setCity] = useRecoilState(cityAtom);

  // Handle Recoil address and city states.
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handlePickup = () => {
    setPickupDeliveryLocal('pickup');
  };

  const handleDelivery = () => {
    setPickupDeliveryLocal('delivery');
  };

  return (
    <div className={styles.container}>
      <Typography
        style={{ textAlign: 'center' }}
        className={styles.notice}
        gutterBottom
        variant="h6"
        component="h2"
      >
        Your order needs to be placed minimum 2 hours from now. If order time
        selected is NOT 2 hours from now, your order WILL NOT be confirmed.
        Vegan cannoli are not available for same day ordering. If you are
        ordering Vegan Boxes, please note that a 48 hour notice is required.
      </Typography>
      <div>
        <Button
          className={
            pickupDeliveryLocal === 'pickup'
              ? styles.pickupDeliveryButtonSelected
              : styles.pickupDeliveryButton
          }
          onClick={handlePickup}
        >
          Curbside Pick up
        </Button>
        <Button
          className={
            pickupDeliveryLocal === 'delivery'
              ? styles.pickupDeliveryButtonSelected
              : styles.pickupDeliveryButton
          }
          onClick={handleDelivery}
        >
          Delivery
        </Button>
      </div>
      {pickupDeliveryLocal === 'pickup' && (
        <Card className={styles.cardImg}>
          <CardActionArea>
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <img
                className={styles.map}
                src={require('../../public/homeContent/cannoliWindsorMap.png')}
              />
            </motion.div>
          </CardActionArea>
        </Card>
      )}

      {pickupDeliveryLocal === 'delivery' && (
        <Typography variant="body2" color="textSecondary" component="p">
          $7 Delivery Charge will apply*
        </Typography>
      )}
      {pickupDeliveryLocal === 'delivery' && (
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Enter Address"
            value={address}
            onChange={(event) => handleChangeAddress(event)}
          />

          <FormControl>
            <InputLabel>City</InputLabel>
            <Select
              className={styles.selectCity}
              placeholder="City"
              value={city}
              onChange={(event) => handleChangeCity(event)}
            >
              <MenuItem value={'Windsor'}>Windsor</MenuItem>
              <MenuItem value={'LaSalle'}>LaSalle</MenuItem>
              <MenuItem value={'Tecumseh'}>Tecumseh</MenuItem>
            </Select>
          </FormControl>
        </form>
      )}
    </div>
  );
};
