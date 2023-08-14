import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente SidebarSubMenu.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @param {Object} theme Objeto de tema proporcionado por Material-UI.
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  // Enlace del submenú
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  // Icono del submenú
  icon: {
    minWidth: theme.spacing(5),
  },
  // Texto del submenú
  text: {
    flexGrow: 1,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.subtitle1.fontSize,
    color: theme.palette.text.primary,
  },
  // Enlace de menú anidado
  nestedLink: {
    paddingLeft: theme.spacing(4),
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  // Enlace activo de menú anidado
  activeLink: {
    backgroundColor: theme.palette.action.selected,
  },
  // Texto de menú anidado
  nestedText: {
    paddingLeft: theme.spacing(1),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
