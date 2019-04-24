import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import UserList from "./components/UserList";
//import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
    <BrowserRouter>
        <div className="container">
            <Route path="/"  exact component={UserList} />
        </div>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
