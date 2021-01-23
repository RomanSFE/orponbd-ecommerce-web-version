import axios from 'axios';

export function customerHttp() {

    const customerToken = localStorage.getItem('customer_token');

    return axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            Authorization: 'Bearer '+ customerToken
        }
    });
}
