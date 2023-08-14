import React from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import AdminPanelStyles from './AdminPanelStyles'; // Importar los estilos del componente
import UserList from './UserList'; // Importar el componente UserList

/**
 * Componente AdminPanel.
 * Representa el panel de administración con opciones para agregar y listar usuarios.
 *
 * @returns {JSX.Element} Elemento JSX que representa el panel de administración.
 */
const AdminPanel = () => {
  const classes = AdminPanelStyles(); // Aplicar los estilos al componente

  return (
    <Container className={classes.root}>
      {/* Encabezado del panel */}
      <Typography variant="h4" className={classes.title}>
        Panel de Administración
      </Typography>

      {/* Sección para agregar usuarios */}
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Agregar Nuevo Usuario
        </Typography>
        <form className={classes.addUserForm}>
          <TextField
            label="Nombre"
            variant="outlined"
            className={classes.inputField}
          />
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            className={classes.inputField}
          />
          <FormControl variant="outlined" className={classes.inputField}>
            <InputLabel>Rol</InputLabel>
            <Select label="Rol">
              <MenuItem value="admin">Administrador</MenuItem>
              <MenuItem value="user">Usuario</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            className={classes.inputField}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.addUserButton}
            startIcon={<AddIcon />}
          >
            Agregar Usuario
          </Button>
        </form>
      </div>

      {/* Sección para listar usuarios */}
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Lista de Usuarios
        </Typography>
        <UserList />
      </div>
    </Container>
  );
};

export default AdminPanel;
