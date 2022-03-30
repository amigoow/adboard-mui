import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-slideshow-image/dist/styles.css'

if ( !process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === 'dev' ) {
  window.api_ip = process.env.REACT_APP_DEV_IP;
} else {
  window.api_ip = process.env.REACT_APP_PROD_IP;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
