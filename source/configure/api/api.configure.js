import axios from 'axios';
import {API} from './type.configure';

const axiosTiming = (instance) => {
  instance.interceptors.request.use((request) => {
    request.ts = Date.now();
    return request;
  });

  instance.interceptors.response.use((response) => {
    const timeInMs = `${Number(Date.now() - response.config.ts).toFixed()}ms`;
    response.latency = timeInMs;
    return response;
  });
};
axiosTiming(axios);

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
    }).then(response => {
        console.log("Response latency: ", response.latency)
        return response.data
        })
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
    console.log("Access+++", access_token)
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
            'Content-Type': 'application/json',
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

export const registerStoreImage = async (data, access_token) => {
    return axios('https://us-central1-avgimaproject.cloudfunctions.net/Medsie/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        },
        data
    }).then(response => response.data)
    .catch(error => {
        throw error;
    })
}

export const getBusinessData = async (data) => {
    return axios(API.GET_BUSINESS_DETAILS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data
    }).then(response => response.data)
    .catch(error => {
        throw error;
    })
}

export const getBusinessListData = async (data) => {
    return axios(API.GET_BUSINESS_CATEGORY_LIST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data
    }).then(response => response.data)
    .catch(error => {
        throw error;
    })
}

export const getHomeData = async (data) => {
    return axios(API.HOME_PAGE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data
    }).then(response => response.data)
    .catch(error => {
        throw error;
    })
}

export const updateUserProfile = async (data, access_token) => {
    console.log("Data: ", data, access_token)
    return axios(API.UPDATE_USER_DETAILS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        },
        data
    }).then(response => response.data)
    .catch(error => {
        throw error;
    })
}

export const checkServer = async () => {
    return axios(API.CHECK_SERVER, {
        method: 'POST',
    }).then(response => response.data)
    .catch(error => {
        throw error;
    })
}