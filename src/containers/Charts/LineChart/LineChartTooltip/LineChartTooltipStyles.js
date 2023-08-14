import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente LineChartTooltip.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  // Contenedor del tooltip
  tooltipContainer: {
    padding: theme.spacing(1),
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    maxWidth: 200, // Ancho máximo del tooltip
  },
  // Encabezado del tooltip
  tooltipHeader: {
    marginBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSize,
  },
  // Contenido del tooltip
  tooltipContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Etiqueta del tooltip
  tooltipLabel: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(1),
    fontSize: theme.typography.fontSize,
  },
  // Valor del tooltip
  tooltipValue: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    fontSize: theme.typography.fontSize,
  },
}));

export default useStyles;
