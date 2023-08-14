import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DatePickerStyles from './DatePickerStyles';

/**
 * Componente DatePicker.
 *
 * Propiedades:
 * - label: Etiqueta para el campo de fecha.
 * - value: Valor de la fecha.
 * - onChange: Función de cambio de fecha.
 *
 * @param {Object} props - Propiedades del componente.
 * @returns {JSX.Element} Elemento JSX que representa el DatePicker.
 */
const DatePicker = ({ label, value, onChange }) => {
  const classes = DatePickerStyles();
  const [isFocused, setIsFocused] = useState(false);

  /**
   * Maneja el cambio de fecha.
   * @param {Object} event - Evento de cambio.
   */
  const handleDateChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={classes.datePickerContainer}>
      {/* Icono del calendario */}
      <CalendarTodayIcon className={classes.icon} />

      {/* Input de fecha */}
      <TextField
        label={label}
        type="date"
        value={value}
        onChange={handleDateChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        variant={isFocused ? 'outlined' : 'standard'}
        InputProps={{
          classes: {
            input: classes.input,
          },
        }}
      />
    </div>
  );
};

// Propiedades por defecto
DatePicker.defaultProps = {
  label: 'Fecha',
  value: '',
  onChange: () => {},
};

// Definir tipos de propiedades
DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePicker;
