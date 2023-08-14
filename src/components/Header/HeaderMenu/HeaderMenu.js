import React, { useState } from 'react';
import { IconButton, Menu } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from './MenuItem/MenuItem'; // Importar el componente MenuItem personalizado
import HeaderMenuStyles from './HeaderMenuStyles'; // Importar los estilos

/**
 * Componente HeaderMenu.
 *
 * @returns {JSX.Element} Componente HeaderMenu.
 */
const HeaderMenu = () => {
  const classes = HeaderMenuStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { icon: '🏠', text: 'Inicio' },
    { icon: '📊', text: 'Tablero' },
    { icon: '👤', text: 'Perfil' },
    { icon: '📁', text: 'Archivos' },
    { icon: '📝', text: 'Notas' },
    { icon: '⚙️', text: 'Configuración' },
    { icon: '📧', text: 'Mensajes' },
    { icon: '📅', text: 'Calendario' },
    { icon: '📚', text: 'Documentos' },
    // Agregar más elementos de menú aquí
  ];

  return (
    <div>
      <IconButton
        aria-label="Menu"
        aria-controls="header-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            className={classes.menuItem}
            onClick={handleMenuClose}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </Menu>
    </div>
  );
};

export default HeaderMenu;
