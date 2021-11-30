import axios from 'axios';

export function getUser() {
    return axios.get("https://my-json-server.typicode.com/atothey/demo/user");
}