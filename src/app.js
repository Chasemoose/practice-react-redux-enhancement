// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './modules/github'
import App from './components/App';

const store = createStore(
    reducer,
    composeWithDevTools( applyMiddleware(thunk) )
)


const root = createRoot(document.querySelector('#root'));
root.render(
    <Provider store={store}>
        <App /> 
    </Provider>
);
