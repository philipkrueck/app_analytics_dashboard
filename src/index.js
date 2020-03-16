import React from 'react';
import ReactDOM from 'react-dom';
import './General/index.css';
import Downloads from './Downloads/Downloads';
import TimeSelection from './Downloads/TimeSelection';
import JWTCreation from './Downloads/JWTCreation';

function App() {
  return (
    <JWTCreation />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
