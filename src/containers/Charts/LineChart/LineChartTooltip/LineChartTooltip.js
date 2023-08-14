import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useStyles from './LineChartTooltipStyles';

/**
 * Componente LineChartTooltip.
 *
 * @param {Object} props Propiedades del componente.
 * @returns {JSX.Element|null} Elemento JSX que representa el LineChartTooltip, o null si no está activo.
 */
const LineChartTooltip = ({ active, payload, label }) => {
  const classes = useStyles();

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const data = payload[0];

  return (
    <Paper className={classes.tooltipContainer} elevation={3}>
      <Typography className={classes.tooltipHeader}>
        {label}
      </Typography>
      <Box className={classes.tooltipContent}>
        <Typography className={classes.tooltipLabel}>
          Valor:
        </Typography>
        <Typography className={classes.tooltipValue}>
          {data.value}
        </Typography>
      </Box>
    </Paper>
  );
};

LineChartTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string.isRequired,
};

export default LineChartTooltip;
