import React, { useState, useEffect } from 'react';
import { Container, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import useStyles from './UserListStyles'; // Importar los estilos de UserList
import api from '../../utils/api'; // Importar la utilidad de API

/**
 * Componente UserList.
 *
 * Muestra una lista de usuarios en una tabla.
 *
 * @returns {JSX.Element} Elemento JSX que representa la lista de usuarios.
 */
const UserList = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  // Cargar la lista de usuarios al montar el componente
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error al cargar la lista de usuarios:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Lista de Usuarios
      </Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserList;



// import React, { useState, useEffect } from 'react';
// import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import axios from 'axios';

// // Estilos utilizando makeStyles de Material-UI
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   tableContainer: {
//     marginTop: theme.spacing(2),
//   },
// }));

// /**
//  * Componente UserList.
//  *
//  * Muestra una lista de usuarios en una tabla.
//  *
//  * @returns {JSX.Element} Elemento JSX que representa la lista de usuarios.
//  */
// const UserList = () => {
//   const classes = useStyles();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Simulando una llamada a una API para obtener la lista de usuarios
//     axios.get('/api/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   return (
//     <div className={classes.root}>
//       {/* Encabezado */}
//       <Typography variant="h5" gutterBottom>
//         Lista de Usuarios
//       </Typography>

//       {/* Tabla */}
//       <TableContainer component={Paper} className={classes.tableContainer}>
//         <Table aria-label="Lista de Usuarios">
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Nombre</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Rol</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {/* Mapeo de usuarios */}
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.id}</TableCell>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default UserList;
