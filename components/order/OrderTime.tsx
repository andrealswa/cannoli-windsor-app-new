import { useState } from 'react';
import { Button, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { useRecoilState } from 'recoil';

import { todayLater, time as timeAtom } from '../../recoil/recoil-atoms';
import styles from './OrderTime.module.css';

export const OrderTime = () => {
  const [todayLaterLocal, setTodayLaterLocal] = useRecoilState(todayLater);
  const [time, setTime] = useRecoilState(timeAtom);
  const [selectedDate, handleDateChange] = useState(new Date());

  // Handle Recoil time states.
  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleToday = () => {
    setTodayLaterLocal('today');
  };

  const handleLater = () => {
    setTodayLaterLocal('later');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Select Your Time</h1>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker value={selectedDate} onChange={handleDateChange} />
        <DateTimePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>

      <div>
        <Button
          className={
            todayLaterLocal === 'today'
              ? styles.pickupDeliveryButtonSelected
              : styles.pickupDeliveryButton
          }
          onClick={handleToday}
        >
          Today
        </Button>
        <Button
          className={
            todayLaterLocal === 'later'
              ? styles.pickupDeliveryButtonSelected
              : styles.pickupDeliveryButton
          }
          onClick={handleLater}
        >
          Later Date
        </Button>
      </div>
      {todayLaterLocal === 'today' && (
        <Typography variant="body2" color="textSecondary" component="p">
          Please allow up to 2 hours for us to prepare*
        </Typography>
      )}
      {todayLaterLocal === 'today' && (
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Enter Time"
            value={time}
            onChange={(event) => handleChangeTime(event)}
          />
        </form>
      )}
      {todayLaterLocal === 'later' && (
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Enter Date and Time"
            value={time}
            onChange={(event) => handleChangeTime(event)}
          />
        </form>
      )}
    </div>
  );
};
