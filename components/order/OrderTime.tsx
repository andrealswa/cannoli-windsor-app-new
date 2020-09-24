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
  // const [selectedDate, handleDateChange] = useState(new Date());

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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimePicker value={time} onChange={setTime} />
        </MuiPickersUtilsProvider>
      )}
      {todayLaterLocal === 'later' && (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker value={time} onChange={setTime} />
        </MuiPickersUtilsProvider>
      )}
    </div>
  );
};
