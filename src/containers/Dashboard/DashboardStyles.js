import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente Dashboard.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  pageHeader: {
    marginBottom: theme.spacing(3),
  },
  chartsContainer: {
    display: 'grid',
    gap: theme.spacing(3),
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
}));

export default useStyles;
