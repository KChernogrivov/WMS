import axios from "axios";

const TOKEN = localStorage.getItem("token") || '';

export const useApi = axios.create({
  baseURL: 'http://ec2-16-170-140-7.eu-north-1.compute.amazonaws.com/api',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    authorization: `Bearer ${TOKEN}`,
  }
});


