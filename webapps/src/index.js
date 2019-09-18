import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/scss/mdb.scss"
import './index.css';
import 'mdbreact/dist/mdbreact';
import * as serviceWorker from './serviceWorker';
import App from './App';
 
ReactDOM.render(
    
    <App />, document.getElementById('root'));

serviceWorker.unregister();
