import axios from "axios";

const TOKEN = 12345678;

axios.defaults.baseURL = 'http://ec2-16-170-140-7.eu-north-1.compute.amazonaws.com';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
