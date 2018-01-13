import axios from 'axios';

const ROOT_URL = 'https://blockchain.info/tobtc';

function getRate(coins) {
    return axios.get(`${ROOT_URL}?currency=USD&value=${coins}`).then(({data}) => data)
}

export default {
    getRate
}