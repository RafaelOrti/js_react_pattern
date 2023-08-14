// SidebarItem.js

import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './SidebarItemStyles';

/**
 * Componente SidebarItem.
 * Representa un enlace en la barra lateral de navegación.
 *
 * @param {string} title - El título del enlace.
 * @param {node} icon - El icono del enlace.
 * @param {string} link - La ruta del enlace.
 * @returns {JSX.Element} Elemento JSX que representa el enlace.
 */
const SidebarItem = ({ title, icon, link }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      component={Link}
      to={link}
      className={classes.link}
      activeClassName={classes.activeLink}
    >
      <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
      <ListItemText primary={title} className={classes.text} />
    </ListItem>
  );
};

// Propiedades requeridas para el componente SidebarItem.
SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default SidebarItem;
