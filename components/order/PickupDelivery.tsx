import { useState } from 'react';
import { Button, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

import { useRecoilState } from 'recoil';

import {
  pickupDelivery,
  address as addressAtom,
  city as cityAtom,
} from '../../recoil/recoil-atoms';
import styles from './PickupDelivery.module.css';

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
