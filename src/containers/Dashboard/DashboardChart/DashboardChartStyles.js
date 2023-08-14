import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente DashboardChart.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  // Contenedor principal del gráfico
  chartContainer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default useStyles;
