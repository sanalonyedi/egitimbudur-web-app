import config from 'config';
import axios from 'axios';

const url = (endpoint) => {
    return `${config.apiUrl}/${config.apiVersion}/${endpoint}`;
}

const post = (endpoint, data = {}) => {
    return axios.post(url(endpoint), data).then(res => res.data);
}

export {
    post
}