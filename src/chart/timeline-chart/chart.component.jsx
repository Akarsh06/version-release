import React from 'react';
import { Chart } from "react-google-charts";
import './chart.style.css';

const ExampleChart = () => {
  return (
    <Chart
  width={'100%'}
  height={'350px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', id: 'Name' },
      { type: 'string', id: 'Phase' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    [
      'dKOSH v5.0',
      'Design',
      new Date(2020, 4, 1),
      new Date(2020, 8, 1),
    ],
    [
      'dKOSH v5.0',
      'Development',
      new Date(2020, 8, 1),
      new Date(2021, 0, 1),
    ],
    [
      'dKOSH v5.0',
      'Testing',
      new Date(2021, 0, 1),
      new Date(2021, 4, 1),
    ],
    [
      'dKOSH v4.0',
      'Design',
      new Date(2020, 0, 1),
      new Date(2020, 4, 1),
    ],
    [
      'dKOSH v4.0',
      'Development',
      new Date(2020, 4, 1),
      new Date(2020, 8, 1),
    ],
    [
      'dKOSH v4.0',
      'Testing',
      new Date(2020, 8, 1),
      new Date(2021, 0, 1),
    ],
    [
      'dKOSH v3.0',
      'Design',
      new Date(2019, 8, 1),
      new Date(2020, 0, 1),
    ],
    [
      'dKOSH v3.0',
      'Development',
      new Date(2020, 0, 1),
      new Date(2020, 4, 1),
    ],
    [
      'dKOSH v3.0',
      'Testing',
      new Date(2020, 4, 1),
      new Date(2020, 8, 1),
    ],
    [
      'dKOSH v2.0',
      'Design',
      new Date(2019, 4, 1),
      new Date(2019, 8, 1),
    ],
    [
      'dKOSH v2.0',
      'Development',
      new Date(2019, 8, 1),
      new Date(2020, 0, 1),
    ],
    [
      'dKOSH v2.0',
      'Testing',
      new Date(2020, 0, 1),
      new Date(2020, 3, 31),
    ],
    [
      'dKOSH v1.0',
      'Design',
      new Date(2019, 0, 1),
      new Date(2019, 4, 1),
    ],
    [
      'dKOSH v1.0',
      'Development',
      new Date(2019, 4, 1),
      new Date(2019, 8, 1),
    ],
    [
      'dKOSH v1.0',
      'Testing',
      new Date(2019, 8, 1),
      new Date(2020, 0, 1),
    ],
  ]}
  options={{
    colors: ['#e95420', '#603913', '#c69c6e'],
    timeline: {
      rowLabelStyle: {
        fontName: 'Roboto',
        fontSize: 14,
        color: '#603913',
      },
      barLabelStyle: { fontName: 'Roboto', fontSize: 16 },
    },
    backgroundColor: '#ffffff',
  }}
  rootProps={{ 'data-testid': '7' }}
/>
  );
};

export default ExampleChart;