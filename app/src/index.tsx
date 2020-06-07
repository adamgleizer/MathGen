import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Choice from './Choice';
import * as serviceWorker from './serviceWorker';
import { Typography } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <Typography gutterBottom color="textSecondary"><a href="https://github.com/ykhas/MathGen">Source Code</a>. Created by Yaniv Khaslavsky. </Typography>
    <Choice />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
