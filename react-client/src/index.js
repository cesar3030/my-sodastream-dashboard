import React from 'react';
import ReactDOM from 'react-dom';
// import 'materialize-css/dist/css/materialize.min.css';
// import './assets/css/'
// import 'src/assets/css/now-ui-dashboard.min.css'
// import 'src/assets/js/core/bootstrap.min.js'
// import 'src/assets/js/core/jquery.min.js'
// import 'src/assets/js/core/popper.min.js'
import './assets/js/now-ui-dashboard.min.js'
// import 'materialize-css/dist/js/materialize.min.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
