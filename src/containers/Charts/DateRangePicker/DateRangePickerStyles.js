import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente DateRangePicker.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  // Contenedor principal del DateRangePicker
  datePickerContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  // Icono junto a la entrada de fecha
  dateIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  // Entrada de fecha
  dateInput: {
    width: 150,
    marginRight: theme.spacing(1),
  },
  // Divisor entre las fechas
  divider: {
    margin: theme.spacing(0, 2),
    color: theme.palette.text.secondary,
  },
  // Etiqueta de selección de fecha
  label: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
