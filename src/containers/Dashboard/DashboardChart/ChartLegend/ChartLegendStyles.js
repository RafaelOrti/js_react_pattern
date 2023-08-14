import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente ChartLegend.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  // Contenedor principal de la leyenda
  legendContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  // Cada elemento de la leyenda
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(3),
  },
  // Círculo de color de la leyenda
  legendColorCircle: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: '50%',
    marginRight: theme.spacing(1),
  },
  // Texto de la leyenda
  legendText: {
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
