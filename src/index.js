import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

/* ######### Components ######### */
import RollDice from './RollDice';
/* ############################## */

ReactDOM.render(
    <div className="App">
      <RollDice />
    </div>
  ,document.getElementById('root')
);