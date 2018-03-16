import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store'
import initReactFastclick from 'react-fastclick';
const store = configureStore();
initReactFastclick();
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
