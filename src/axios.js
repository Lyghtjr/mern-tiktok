import axios from "axios";

const instance = axios.create({
    baseURL:"https://heroku-tiktok.herokuapp.com/",
});

export default instance;