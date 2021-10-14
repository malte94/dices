import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

/* ######### Components ######### */
import Die from './Die';
/* ############################## */

ReactDOM.render(
    <div className="App">
      <Die face="five"/>
    </div>
  ,document.getElementById('root')
);