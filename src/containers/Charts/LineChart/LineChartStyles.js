import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente LineChart.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  // Contenedor principal del gráfico
  chartContainer: {
    padding: theme.spacing(3),
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
  },
  // Título del gráfico
  chartTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    fontSize: theme.typography.h5.fontSize,
  },
}));

export default useStyles;
