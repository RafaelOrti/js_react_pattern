import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Typography, Paper } from '@material-ui/core';
import useStyles from './LineChartStyles';
import LineChartTooltip from './LineChartTooltip';

/**
 * Componente LineChart.
 *
 * @param {Object} props Propiedades del componente.
 * @returns {JSX.Element} Elemento JSX que representa el LineChart.
 */
const LineChartComponent = ({ data, dataKeyX, dataKeyY, labelX, labelY, title }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.chartContainer}>
      <Typography variant="h6" className={classes.chartTitle}>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKeyX} label={{ value: labelX, position: 'insideBottom', offset: -10 }} />
          <YAxis label={{ value: labelY, angle: -90, position: 'insideLeft', offset: -5 }} />
          <Tooltip content={<LineChartTooltip />} />
          <Line type="monotone" dataKey={dataKeyY} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

LineChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKeyX: PropTypes.string.isRequired,
  dataKeyY: PropTypes.string.isRequired,
  labelX: PropTypes.string.isRequired,
  labelY: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LineChartComponent;
