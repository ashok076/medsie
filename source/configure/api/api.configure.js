import axios from 'axios';
import {API} from './type.configure';

export const register = async (data) => {
    return axios(API.REGISTRATION_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data
    }).then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export const login = async (data) => {
    return axios(API.LOGIN_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data
    }).then(response => response.data)
    .catch(error => {
        throw error;
    });
}