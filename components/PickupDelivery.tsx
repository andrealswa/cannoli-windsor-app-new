import { useState } from 'react'
import { Button } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { useRecoilState } from 'recoil'

import styles from './PickupDelivery.module.css'
import { pickupDelivery } from '../recoil/recoil-atoms'

export const PickupDelivery = () => {
  const [pickupDeliveryLocal, setPickupDeliveryLocal] = useRecoilState(pickupDelivery)

  const [city, setCity] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string);
  };

  const handlePickup = () => {
    setPickupDeliveryLocal("pickup")
  }

  const handleDelivery = () => {
    setPickupDeliveryLocal("delivery")
  }

  return (
    <div className={styles.container}>
      <div>
        <Button onClick={handlePickup}>Pickup</Button>
        <Button onClick={handleDelivery}>Delivery</Button>
      </div>
      {pickupDeliveryLocal === "delivery" && <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Enter Address" />
        <FormControl>
          <InputLabel>City</InputLabel>
          <Select
            className={styles.selectCity}
            placeholder="City"
            value={city}
            onChange={handleChange}
          >
            <MenuItem value={"windsor"}>Windsor</MenuItem>
            <MenuItem value={"lasalle"}>LaSalle</MenuItem>
            <MenuItem value={"tecumseh"}>Tecumseh</MenuItem>
          </Select>
        </FormControl>
      </form>}
    </div>
  )
}
