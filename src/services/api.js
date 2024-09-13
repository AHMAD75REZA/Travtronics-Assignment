import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const loginUser = (username, password) =>
  axios.get(`${API_URL}/users`, { params: { username, password } });
export const placeOrder = (order) => axios.post(`${API_URL}/orders`, order);
