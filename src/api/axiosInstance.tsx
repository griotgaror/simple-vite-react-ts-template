import axios, { AxiosError, AxiosResponse } from 'axios';

export const apiBaseUrl = '/api';

export const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);
