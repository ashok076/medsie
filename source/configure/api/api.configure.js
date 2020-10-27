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

export const registerStore = async (data, access_token) => {
    return axios(API.REGISTER_STORE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + access_token
        },
        data
    }).then(response => response.data)
    .catch(error => {
        throw error;
    })
}

export const categoryStore = async (access_token) => {
    return axios(API.CATEGORY_STORE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + access_token
        },
        data: JSON.stringify({
            Type: 1
        })
    }).then(response => response.data)
    .catch(error => {
        throw error;
    })
}

export const accountSettings = async (access_token) => {
    return axios(API.ACCOUNT_SETTING, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + access_token
        },
        data: JSON.stringify({
            Type: 1
        })
    }).then(response => response.data)
    .catch(error => {
        throw error;
    })
}