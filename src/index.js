import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducer } from './reducers/Reducer'
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(Reducer);
console.log('this is the', store)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
