import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import {HashRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root'));

serviceWorker.unregister();
