import axios from 'axios';

export function loadTransactions () {
    return axios({
        method: 'GET',
        responseType: 'json',
        url: 'https://my-json-server.typicode.com/Mteuahasan/json-server-test/transactions',
    });
}
