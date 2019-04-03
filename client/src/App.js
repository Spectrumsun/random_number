import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Number from './component/Numbers';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
require('bootstrap');

ReactDOM.render(
  <div>
    <Number />
  </div>,
  document.getElementById('root')
);
