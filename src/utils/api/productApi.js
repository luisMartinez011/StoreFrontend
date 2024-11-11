import axios from 'axios';
import { variables } from './variables.js';

const API_URL = variables.PRODUCTS_API

const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}



const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}
export default {
    getProducts,
    getProductById
};
