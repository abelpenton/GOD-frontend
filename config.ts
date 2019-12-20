import { AxiosRequestConfig } from 'axios';

export const GOD_API: string = 'https://localhost:5001/api/v1';

export const options: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json-patch+json',
        'Accept': 'application/json'
    }
};