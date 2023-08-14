import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos para el componente MenuItem.
 *
 * @typedef {Object} MenuItemStyles
 * @property {string} menuItem - Clase para el elemento de menú.
 * @property {string} menuIcon - Clase para el icono del menú.
 * @property {string} menuText - Clase para el texto del menú.
 */
const MenuItemStyles = makeStyles((theme) => ({
  menuItem: {
    display: 'flex', // Aplicar display flex para alinear elementos horizontalmente.
    alignItems: 'center', // Alinear elementos verticalmente al centro.
    padding: theme.spacing(2, 3),
    borderBottom: `1px solid ${theme.palette.divider}`,
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    color: theme.palette.text.primary, // Color de texto.
    minWidth: 200, // Ancho mínimo del elemento de menú.
  },
  menuIcon: {
    marginRight: theme.spacing(2),
    fontSize: 24,
    color: theme.palette.text.secondary,
  },
  menuText: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export default MenuItemStyles;





// import { makeStyles } from '@material-ui/core/styles';

// /**
//  * Estilos para el componente MenuItem.
//  *
//  * @returns {Object} Objeto de estilos de Material-UI.
//  */
// const MenuItemStyles = makeStyles((theme) => ({
//   menuItem: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(2, 3),
//     transition: 'background-color 0.2s ease-in-out',
//     '&:hover': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
//   icon: {
//     minWidth: '36px',
//     marginRight: theme.spacing(2),
//   },
//   text: {
//     fontWeight: theme.typography.fontWeightMedium,
//     fontSize: theme.typography.fontSize,
//     color: theme.palette.text.primary,
//   },
// }));

// export default MenuItemStyles;
