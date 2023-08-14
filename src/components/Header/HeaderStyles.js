import { makeStyles } from '@material-ui/core/styles';

/**
 * Estilos personalizados para el componente Header.
 *
 * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
 *
 * @param {Object} theme Objeto de tema proporcionado por Material-UI.
 * @returns {Object} Objeto de estilos generado por makeStyles.
 */
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      marginLeft: 0,
    },
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;



// import { makeStyles } from '@material-ui/core/styles';

// /**
//  * Estilos personalizados para el componente Header.
//  *
//  * Utiliza Material-UI's makeStyles para definir estilos reutilizables.
//  *
//  * @returns {Object} Objeto de estilos generado por makeStyles.
//  */
// const useStyles = makeStyles((theme) => ({
//   // Estilo para la barra de navegación
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   // Estilo para el botón del menú
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   // Estilo para el título
//   title: {
//     flexGrow: 1,
//     textAlign: 'center', // Alineación central para el título
//   },
// }));

// export default useStyles;
