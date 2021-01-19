import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//import redux part
import store from './store/index';
import {Provider} from 'react-redux';

//axios api service
import {http} from "./ApiServices/http_services";

//jwt service
import jwt from 'jsonwebtoken';

const jwt_secret = 'dUQp4i2X1lDXi8MiSA9btlsfAyf2OMbvYxAubmf7EUxUFT1gq2yWYIowDTEs6gfd';

let token = localStorage.getItem('token');

if (token){
    // verify a token symmetric
    jwt.verify(token, jwt_secret, (err, decoded) => {

        if (err)
        {
            localStorage.removeItem('token');
            token = null;
        }else {
            if (decoded.iss !== 'http://localhost:8000/api/auth/signin')
            {
                localStorage.removeItem('token');
                token = null;
            }
        }
    });
}

const render = () => {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>,
        document.getElementById('root')
    );
};

if (token){
    http().get('/auth/me').then(res => {
        store.dispatch({ type: 'SET_LOGIN', payload: res.data});
        render();
    });

} else {
    render();
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
