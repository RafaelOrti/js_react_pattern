import React, { useState } from 'react';
import { IconButton, Divider, Typography } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DatePicker from './DatePicker';
import useStyles from './DateRangePickerStyles';

const DateRangePicker = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateChange = (selectedDate, type) => {
    if (type === 'start') {
      setStartDate(selectedDate);
    } else {
      setEndDate(selectedDate);
    }
  };

  return (
    <div className={classes.root}>
      <IconButton className={classes.iconButton}>
        <CalendarTodayIcon className={classes.calendarIcon} />
      </IconButton>
      <DatePicker
        label="Fecha de inicio"
        value={startDate}
        onChange={(date) => handleDateChange(date, 'start')}
      />
      <Divider orientation="vertical" className={classes.divider} />
      <DatePicker
        label="Fecha de fin"
        value={endDate}
        onChange={(date) => handleDateChange(date, 'end')}
      />
      <Typography variant="subtitle2" className={classes.label}>
        Selecciona un rango de fechas:
      </Typography>
    </div>
  );
};

export default DateRangePicker;
