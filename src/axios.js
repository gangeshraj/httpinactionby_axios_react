
import axios from 'axios';

const instance = axios.create({//an instance of axios is created for this app to be using
    baseURL: 'https://jsonplaceholder.typicode.com'//the base url for requests from 
    // web to be prepended before all requests and responses
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;