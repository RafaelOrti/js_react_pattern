import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import useStyles from './HomeStyles'; // Importar los estilos del Home

/**
 * Componente Home.
 *
 * Representa la página de inicio del dashboard.
 *
 * @returns {JSX.Element} Elemento JSX que representa la página de inicio.
 */
const Home = () => {
  // Obtener las clases de estilos mediante destructuring
  const { root, header, content, button } = useStyles();

  return (
    <Container className={root}>
      {/* Encabezado */}
      <Typography className={header} variant="h4" gutterBottom>
        Bienvenido al Dashboard
      </Typography>

      {/* Contenido */}
      <Typography className={content} variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sapien sed
        libero cursus ultrices. Vivamus nec ligula eu justo porttitor convallis.
        Suspendisse potenti.
      </Typography>

      {/* Botón de Iniciar Sesión */}
      <Button className={button} variant="contained" color="primary">
        Iniciar sesión
      </Button>
    </Container>
  );
};

export default Home;
