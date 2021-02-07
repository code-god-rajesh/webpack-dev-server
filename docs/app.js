import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.scss';

function App() {
  const [state, setState] = useState('CLICK ME');

  return (
    <div>
      <button onClick={() => setState('CLICKED')}>{state}</button>
      <button onClick={() => setState('CLICKED')}>{state}</button>
    </div>
  );
}

render(<App />, document.getElementById('root'));
