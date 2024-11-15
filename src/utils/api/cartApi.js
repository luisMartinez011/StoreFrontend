import axios from 'axios';
import { variables } from './variables.js';

const API_URL = variables.CART_API



const getCartById = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
}

export default {
    getCartById,
};
