import React from 'react';
import ReactDOM from 'react-dom';
import './General/index.css';
import Downloads from './Downloads/Downloads';
import TimeSelection from './General/TimeSelection';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <Downloads />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
