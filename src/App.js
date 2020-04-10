import React from 'react';
import './App.css';
import ExampleChart from './chart/timeline-chart/chart.component';
import GanttChart from './chart/gantt-chart/gantt.component'

function App() {
  return (
    <div className="App">
      <div className='g-chart'>
        <h2>dKOSH Version Release Chart</h2>
        <ExampleChart />
        
        <h2>Status Chart</h2>
        <p>dKOSH v1.0 Status Chart</p>
        <GanttChart />
      </div>
    </div>
  );
}

export default App;
