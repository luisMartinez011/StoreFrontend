import axios from 'axios';
import { variables } from './variables.js';

const CATEGORIES_API = variables.CATEGORIES_API

const getCategories = async () => {

  const response = await axios.get(CATEGORIES_API);

  return response.data;
}


export default {
    getCategories,
};
