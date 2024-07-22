import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (userData) => API.post('/auth/register', userData);
export const createPost = (postData) => API.post('/posts', postData);
