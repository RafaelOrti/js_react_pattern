import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import useStyles from './SidebarStyles'; // Importar los estilos del Sidebar
import SidebarItem from './SidebarItem'; // Importar el componente SidebarItem
import SidebarSubMenu from './SidebarSubMenu'; // Importar el componente SidebarSubMenu

// Datos para el menú
const menuData = [
  {
    text: 'Dashboard',
    icon: 'dashboard',
    children: [
      {
        text: 'Dashboard 1',
        path: '/dashboard/1',
      },
      {
        text: 'Dashboard 2',
        path: '/dashboard/2',
      },
    ],
  },
  {
    text: 'Charts',
    icon: 'insert_chart',
    children: [
      {
        text: 'Line Chart',
        icon: 'show_chart',
      },
      {
        text: 'Bar Chart',
        icon: 'bar_chart',
      },
    ],
  },
  {
    text: 'Users',
    icon: 'people',
  },
  {
    text: 'Maps',
    icon: 'map',
  },
  {
    text: 'Settings',
    icon: 'settings',
    children: [
      {
        text: 'Profile',
        path: '/profile',
      },
      {
        text: 'Security',
        path: '/security',
      },
    ],
  },
  {
    text: 'Help',
    icon: 'help',
  },
];

/**
 * Componente Sidebar.
 *
 * @returns {JSX.Element} Elemento JSX que representa el Sidebar.
 */
const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {/* Mapear los elementos del menú */}
        {menuData.map((menuItem, index) => (
          <React.Fragment key={index}>
            {/* Verificar si el elemento tiene hijos */}
            {menuItem.children ? (
              <SidebarSubMenu
                text={menuItem.text}
                icon={menuItem.icon}
                items={menuItem.children}
              />
            ) : (
              <SidebarItem
                text={menuItem.text}
                icon={menuItem.icon}
                path={menuItem.path}
              />
            )}
            {/* Agregar un divisor después de cada elemento */}
            {index < menuData.length - 1 && <Divider className={classes.divider} />}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;



// import React from 'react';
// import { Drawer, List, Divider } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import SidebarItem from './SidebarItem';
// import SidebarSubMenu from './SidebarSubMenu';

// // Ancho del sidebar
// const drawerWidth = 240;

// // Estilos utilizando makeStyles de Material-UI
// const useStyles = makeStyles((theme) => ({
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     background: theme.palette.background.default,
//     borderRight: 'none',
//   },
//   toolbar: theme.mixins.toolbar,
//   menuSection: {
//     marginBottom: theme.spacing(2),
//   },
//   divider: {
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//   },
// }));

// const Sidebar = () => {
//   const classes = useStyles();

//   return (
//     <Drawer
//       className={classes.drawer}
//       variant="permanent"
//       classes={{
//         paper: classes.drawerPaper,
//       }}
//     >
//       {/* Espacio para el logotipo u otros elementos en la parte superior del sidebar */}
//       <div className={classes.toolbar} />

//       {/* Sección superior del menú */}
//       <div className={classes.menuSection}>
//         <List>
//           {/* Elemento del menú: Dashboard */}
//           <SidebarItem text="Dashboard" icon="dashboard" />

//           {/* Submenú de Charts */}
//           <SidebarSubMenu text="Charts" icon="insert_chart">
//             {/* Elemento del submenú: Line Chart */}
//             <SidebarItem text="Line Chart" icon="show_chart" />

//             {/* Elemento del submenú: Bar Chart */}
//             <SidebarItem text="Bar Chart" icon="bar_chart" />
//           </SidebarSubMenu>

//           {/* Elemento del menú: Users */}
//           <SidebarItem text="Users" icon="people" />
//         </List>
//       </div>

//       {/* Divisor entre secciones del menú */}
//       <Divider className={classes.divider} />

//       {/* Sección inferior del menú */}
//       <div className={classes.menuSection}>
//         <List>
//           {/* Elemento del menú: Settings */}
//           <SidebarItem text="Settings" icon="settings" />

//           {/* Elemento del menú: Help */}
//           <SidebarItem text="Help" icon="help" />
//         </List>
//       </div>
//     </Drawer>
//   );
// };

// export default Sidebar;
