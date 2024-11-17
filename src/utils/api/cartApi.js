import axios from 'axios';
import { variables } from './variables.js';

const CART_API = variables.CART_API
const CART_ITEMS_API = variables.CART_ITEMS_API


const getCartById = async (token, idUser) => {
  const response = await axios.get(`${CART_API}/${idUser}`, {
    headers: {
        Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
    }});
    console.log('get cart by id api',response.data)
  return response.data;
}


const putCartItem = async (token, cartItemId, productId, quantity) => {
  const response = await axios.put(`${CART_ITEMS_API}/${cartItemId}/${productId}/${quantity}`, {},
    {
      headers: {
          Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
      }
    }).then(response => {
      console.log(response.data);
      return response
    })
    .catch(err => {
      console.error('Error recibido en la solicitud:', err);
    });
  return response.data;
}



const postCartItem = async (token, idUser, productId, quantity) => {
  const response = await axios.post(`${CART_ITEMS_API}/${idUser}/${productId}/${quantity}`,{}, {
    headers: {
        Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
    }
  }).then(response => {
    console.log(response.data);
    return response
  })
  .catch(err => {
    console.error('Error recibido en la solicitud:', err);
  });
  return response.data;
}





const deleteCartItem = async (token, cartItemId) => {
  const response = await axios.delete(`${CART_ITEMS_API}/${cartItemId}`,{
    headers: {
        Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
    }
  }).then(response => {
      console.log(response.data);
      return response
    })
    .catch(err => {
      console.error('Error recibido en la solicitud:', err);
    });
  return response.data;
}

export default {
    getCartById,
    putCartItem,
    postCartItem,
    deleteCartItem
};
