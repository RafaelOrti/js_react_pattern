import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuItemStyles from './MenuItemStyles';

/**
 * Representa un elemento de menú en la barra lateral.
 *
 * @component
 *
 * @param {MenuItemProps} props - Propiedades del componente `MenuItem`.
 * @returns {JSX.Element} Componente de elemento de menú en la barra lateral.
 */
const MenuItem = ({ label, icon: Icon, onClick }) => {
  const classes = MenuItemStyles();

  return (
    <ListItem button onClick={onClick} className={classes.menuItem}>
      {Icon && (
        <ListItemIcon>
          <Icon className={classes.menuIcon} />
        </ListItemIcon>
      )}
      <ListItemText primary={label} className={classes.menuText} />
    </ListItem>
  );
};

/**
 * Propiedades del componente `MenuItem`.
 *
 * @typedef {Object} MenuItemProps
 * @property {string} label - Etiqueta del elemento de menú.
 * @property {elementType} icon - Icono del elemento de menú.
 * @property {function} onClick - Función a ejecutar al hacer clic en el elemento.
 */
MenuItem.propTypes = {
  /**
   * Etiqueta del elemento de menú.
   */
  label: PropTypes.string.isRequired,
  /**
   * Icono del elemento de menú (opcional).
   */
  icon: PropTypes.elementType,
  /**
   * Función a ejecutar al hacer clic en el elemento.
   */
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
