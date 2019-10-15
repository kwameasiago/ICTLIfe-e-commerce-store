import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';

import App from './App/index.jsx';

const wrapper = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , wrapper)