import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Routes from './Routes'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk),));
render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
