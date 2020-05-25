import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
       <App /> 
    </Provider>, 
    document.getElementById('root')
);

