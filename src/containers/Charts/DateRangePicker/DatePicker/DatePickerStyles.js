import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente DatePicker.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const DatePickerStyles = makeStyles((theme) => ({
  // Contenedor principal del DatePicker
  datePickerContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  // Icono del calendario
  icon: {
    color: theme.palette.primary.main,
  },
  // Estilo para el input de fecha
  input: {
    flex: 1,
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
    },
    '&:focus': {
      outline: 'none',
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
    },
  },
}));

export default DatePickerStyles;
