import React from 'react';
import Test from './test.jsx'; 

import '../styles/index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Test/> 
        <h1>It Works!</h1>
        <p>This React AWESOME BRODY just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
      </div>
    )
  }
}
