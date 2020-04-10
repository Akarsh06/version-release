import React from 'react';
import { Chart } from "react-google-charts";


const GanttChart = () => {
  return (
    <Chart
  width={'100%'}
  height={'400px'}
  chartType="Gantt"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Resource' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
    ],
    [
      '1',
      'Planning Meeting',
      'dKOSH v1.0',
      new Date(2018, 10, 1),
      new Date(2018, 11, 1),
      null,
      100,
      null,
    ],
    [
      '2',
      'Develop Business Concept',
      'dKOSH v1.0',
      new Date(2018, 11, 1),
      new Date(2019, 0, 1),
      null,
      100,
      null,
    ],
    [
      '3',
      'Design',
      'dKOSH v1.0',
      new Date(2019, 0, 1),
      new Date(2019, 1, 1),
      null,
      80,
      null,
    ],
    [
      '4',
      'Development',
      'dKOSH v1.0',
      new Date(2019, 1, 1),
      new Date(2019, 2, 1),
      null,
      50,
      null,
    ],
    [
      '5',
      'Testing',
      'dKOSH v1.0',
      new Date(2019, 2, 1),
      new Date(2019, 3, 1),
      null,
      30,
      null,
    ],
    [
      '6',
      'Demo',
      'dKOSH v1.0',
      new Date(2019, 3, 1),
      new Date(2019, 3, 10),
      null,
      0,
      null,
    ],
    [
      '7',
      'Implementation',
      'dKOSH v1.0',
      new Date(2019, 3, 10),
      new Date(2019, 3, 20),
      null,
      0,
      null,
    ],
  ]}
  options={{
    height: 400,
    gantt: {
      trackHeight: 30,
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
  );
};

export default GanttChart;