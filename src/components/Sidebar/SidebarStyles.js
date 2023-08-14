import { makeStyles } from '@material-ui/core/styles';

// Ancho del sidebar
const drawerWidth = 240;

/**
 * Estilos personalizados para el componente Sidebar.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @param {Object} theme Objeto de tema proporcionado por Material-UI.
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  // Estilo para el contenedor del sidebar
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  // Estilo para el papel del sidebar
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.background.default,
    borderRight: 'none',
  },
  // Estilo para el espacio de la barra superior del sidebar
  toolbar: theme.mixins.toolbar,
  // Estilo para la sección del menú
  menuSection: {
    marginBottom: theme.spacing(2),
  },
  // Estilo para el divisor entre secciones del menú
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
