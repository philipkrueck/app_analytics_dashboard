import React from 'react';
import ReactDOM from 'react-dom';
import './General/index.css';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <Dashboard />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
