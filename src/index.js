import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';

ReactDOM.render(
    <Popup />,
    document.getElementById('popupContainer')
);

Popup.alert('Hello');
/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Popup from 'react-popup';

Popup.alert('I am alert, nice to meet you');
ReactDOM.render(
    <App />
  , document.querySelector('.container'));
  ReactDOM.render(
      <Popup />,
      document.getElementById('popupContainer')
  );

  Popup.alert('Hello');
*/
