import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import useStyles from './SidebarSubMenuStyles';

/**
 * Componente SidebarSubMenu.
 * Representa un submenú desplegable en la barra lateral de navegación.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - El título del submenú.
 * @param {node} props.icon - El icono del submenú.
 * @param {array} props.items - Los elementos de menú del submenú.
 * @returns {JSX.Element} Elemento JSX que representa el submenú.
 */
const SidebarSubMenu = ({ title, icon, items }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // Manejar el clic en el submenú para abrir o cerrar
  const handleSubMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Elemento de submenú */}
      <ListItem button onClick={handleSubMenuToggle} className={classes.link}>
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        <ListItemText primary={title} className={classes.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      {/* Elementos de menú dentro del submenú */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.link}
            key={item.title}
            className={classes.nestedLink}
            activeClassName={classes.activeLink}
          >
            <ListItemText primary={item.title} className={classes.nestedText} />
          </ListItem>
        ))}
      </Collapse>
    </>
  );
};

// Definición de tipos de propiedades requeridas para el componente SidebarSubMenu.
SidebarSubMenu.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SidebarSubMenu;
