import React from 'react';
import { Display } from './styles';

function App(props) {
  return (
    <Display>
        {props.value}
    </Display>
  );
}

export default App;
