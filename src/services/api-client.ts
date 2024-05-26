import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '67f3f388dac547359e5b37c6ffcbbf36'
    }
})