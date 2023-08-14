
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderMenu from './HeaderMenu';

import useStyles from './HeaderStyles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          My Awesome App
        </Typography>
        <div className={classes.menuContainer}>
          <HeaderMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;







// import React from 'react';
// import PropTypes from 'prop-types';
// import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import HeaderStyles from './HeaderStyles';

// /**
//  * Componente Header Profesional.
//  *
//  * Renderiza un encabezado con título y menú desplegable.
//  *
//  * @component
//  * @example
//  * // Ejemplo de uso:
//  * <Header title="Mi Aplicación" onMenuClick={handleMenuClick} />
//  *
//  * @param {HeaderProps} props - Propiedades del componente `Header`.
//  * @returns {JSX.Element} Componente de encabezado.
//  */
// const Header = ({ title, onMenuClick }) => {
//   const classes = HeaderStyles();

//   return (
//     <AppBar position="fixed" className={classes.appBar}>
//       <Toolbar>
//         {/* Botón del menú desplegable */}
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           className={classes.menuButton}
//           onClick={onMenuClick}
//         >
//           <MenuIcon />
//         </IconButton>
//         {/* Título del encabezado */}
//         <Typography variant="h6" className={classes.title}>
//           {title}
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   );
// };

// /**
//  * Propiedades del componente `Header`.
//  *
//  * @typedef {Object} HeaderProps
//  * @property {string} title - Título del encabezado.
//  * @property {Function} onMenuClick - Función de controlador para el clic en el menú.
//  */
// Header.propTypes = {
//   /**
//    * Título del encabezado.
//    */
//   title: PropTypes.string.isRequired,
//   /**
//    * Función de controlador para el clic en el menú.
//    */
//   onMenuClick: PropTypes.func.isRequired,
// };

// export default Header;




// /////////version con styles incorporado///
// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
// // import MenuIcon from '@material-ui/icons/Menu';
// // import { makeStyles } from '@material-ui/core/styles';

// // // Estilos personalizados para el encabezado
// // const useStyles = makeStyles((theme) => ({
// //   appBar: {
// //     zIndex: theme.zIndex.drawer + 1,
// //   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //   },
// //   title: {
// //     flexGrow: 1,
// //   },
// // }));

// // /**
// //  * Componente de encabezado profesional.
// //  *
// //  * Este componente renderiza un encabezado con título y menú desplegable.
// //  *
// //  * @component
// //  * @example
// //  * // Ejemplo de uso:
// //  * <Header title="Mi Aplicación" onMenuClick={handleMenuClick} />
// //  *
// //  * @param {HeaderProps} props - Propiedades del componente `Header`.
// //  * @returns {JSX.Element} Componente de encabezado.
// //  */
// // const Header = ({ title, onMenuClick }) => {
// //   const classes = useStyles();

// //   return (
// //     <AppBar position="fixed" className={classes.appBar}>
// //       <Toolbar>
// //         {/* Icono del menú desplegable */}
// //         <IconButton
// //           edge="start"
// //           color="inherit"
// //           aria-label="menu"
// //           className={classes.menuButton}
// //           onClick={onMenuClick}
// //         >
// //           <MenuIcon />
// //         </IconButton>
// //         {/* Título del encabezado */}
// //         <Typography variant="h6" className={classes.title}>
// //           {title}
// //         </Typography>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // /**
// //  * Propiedades del componente `Header`.
// //  *
// //  * @typedef {Object} HeaderProps
// //  * @property {string} title - Título del encabezado.
// //  * @property {Function} onMenuClick - Función de controlador para el clic en el menú.
// //  */
// // Header.propTypes = {
// //   /**
// //    * Título del encabezado.
// //    */
// //   title: PropTypes.string.isRequired,
// //   /**
// //    * Función de controlador para el clic en el menú.
// //    */
// //   onMenuClick: PropTypes.func.isRequired,
// // };

// // /**
// //  * Valores predeterminados para las propiedades del componente `Header`.
// //  *
// //  * @type {HeaderProps}
// //  */
// // Header.defaultProps = {
// //   title: 'Mi Aplicación',
// //   onMenuClick: () => {},
// // };

// // export default Header;
