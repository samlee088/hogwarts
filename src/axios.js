import axios from 'axios';

const instance = axios.create({
    baseURL: "https://wizard-world-api.herokuapp.com",
})

export default instance;