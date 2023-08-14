import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import useStyles from './ChartLegendStyles'; // Importar los estilos del ChartLegend

/**
 * Componente ChartLegend.
 *
 * Muestra una leyenda para los elementos del gráfico.
 *
 * @param {Object} props Propiedades del componente.
 * @returns {JSX.Element} Elemento JSX que representa el ChartLegend.
 */
const ChartLegend = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.legendContainer}>
      {data.map((item, index) => (
        <Box key={index} className={classes.legendItem}>
          {/* Círculo de color */}
          <Box
            className={classes.legendColorCircle}
            style={{ backgroundColor: item.color }}
          />

          {/* Etiqueta del elemento */}
          <Typography className={classes.legendText}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

ChartLegend.propTypes = {
  /**
   * Datos de la leyenda en formato de array de objetos.
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Etiqueta del elemento.
       */
      label: PropTypes.string.isRequired,
      /**
       * Color del círculo de la leyenda.
       */
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChartLegend;
