import axios from 'axios';

export const APIHeaders = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'auth-token': {
        toString () {
            return `${localStorage.getItem('token')}`
        }
    }
};

export const API = axios.create({
    baseURL: 'http://127.0.0.1:3002', //process.env.REACT_APP_BACK_URL
    headers: APIHeaders
});