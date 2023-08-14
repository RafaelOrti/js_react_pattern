import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import {
  DashboardChart,
  ChartLegend,
  DateRangePicker
} from '../components'; // Importar los componentes necesarios
import useStyles from './DashboardStyles'; // Importar los estilos del Dashboard

/**
 * Componente Dashboard.
 *
 * Este componente muestra un panel de control con gráficos y controles de fecha.
 *
 * @returns {JSX.Element} Elemento JSX que representa el Dashboard.
 */
const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container className={classes.dashboardContainer}>
      {/* Encabezado de la página */}
      <Typography variant="h4" className={classes.pageHeader}>
        Dashboard
      </Typography>

      {/* Selector de rango de fechas */}
      <DateRangePicker />

      {/* Gráficos */}
      <div className={classes.chartsContainer}>
        <Grid container spacing={3}>
          {/* Gráfico de Ventas Totales */}
          <Grid item xs={12} md={6}>
            <DashboardChart title="Ventas Totales" dataKey="sales" />
          </Grid>

          {/* Gráfico de Usuarios Activos */}
          <Grid item xs={12} md={6}>
            <DashboardChart title="Usuarios Activos" dataKey="activeUsers" />
          </Grid>
        </Grid>
      </div>

      {/* Leyenda de los gráficos */}
      <ChartLegend />
    </Container>
  );
};

export default Dashboard;
