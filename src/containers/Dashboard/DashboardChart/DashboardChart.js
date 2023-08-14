import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chart from 'react-apexcharts';
import ChartLegend from './ChartLegend';
import useStyles from './DashboardChartStyles';

/**
 * Componente DashboardChart.
 *
 * Muestra un gráfico con un título y leyenda personalizada.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @returns {JSX.Element}
 */
const DashboardChart = ({ title, options, series, legendData }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.chartContainer} elevation={3}>
      <Typography variant="h6" className={classes.chartTitle}>
        {title}
      </Typography>

      <Chart options={options} series={series} type="bar" height={320} />

      <ChartLegend data={legendData} />
    </Paper>
  );
};

DashboardChart.propTypes = {
  /**
   * Título del gráfico.
   */
  title: PropTypes.string.isRequired,
  /**
   * Opciones de configuración del gráfico.
   */
  options: PropTypes.object.isRequired,
  /**
   * Datos de la serie del gráfico.
   */
  series: PropTypes.array.isRequired,
  /**
   * Datos de la leyenda del gráfico.
   */
  legendData: PropTypes.array.isRequired,
};

export default DashboardChart;
