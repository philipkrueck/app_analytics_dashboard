import React from 'react';
import ReactDOM from 'react-dom';
import './General/index.css';
import Page from './General/Page';
import Downloads from './Downloads/Downloads';

function App() {
  return (
    <Page />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
