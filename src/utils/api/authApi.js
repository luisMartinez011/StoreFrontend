import axios from 'axios';
import { variables } from './variables.js';

const API_URL = variables.AUTH_API

const login = async (email,password) => {
  const loginUrl = `${API_URL}/LogIn`;
  const response = await axios.post(
    loginUrl,
    {},
    {
      params: {
        email,password
      }
    }
  )
  .then(response => {
    const data = response.data;
    return response.data;
  })
  .catch(error => {
    return fail(error);
  });
  return response;
}

const register = async (name,email, password) => {
  const registerURL = `${API_URL}/SignUp`;
  const response = await axios.post(
    registerURL,
    {},
    {
      params: {
        name,
        email,password
      }
    }
  )
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return fail(error);
  });
  return response;
}


export default {
  login,
  register
};
