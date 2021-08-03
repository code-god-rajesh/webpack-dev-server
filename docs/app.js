import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

render(<App />, document.getElementById('root'));
