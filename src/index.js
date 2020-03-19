import React from 'react';
import ReactDOM from 'react-dom';
import './General/index.css';
import Page from './General/Page';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <Reviews />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
