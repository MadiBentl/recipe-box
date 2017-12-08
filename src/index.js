import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './components/pop-up';
import App from './components/app';

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
ReactDOM.render(
    <Popup />,
     document.querySelector('#popupContainer')
);
