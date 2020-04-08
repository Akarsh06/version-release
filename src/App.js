import React from 'react';
import './App.css';
import ExampleChart from './chart/chart.component';


function App() {
  return (
    <div className="App">
      <div className='g-chart'>
      <h2>dKOSH Version Release Chart</h2>
      <ExampleChart />
      </div>
    </div>
  );
}

export default App;
