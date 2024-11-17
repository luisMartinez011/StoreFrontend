import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartById,
  putCartItem,
  deleteCartItem,
} from "../app/actions/cartActions";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const { status_get_cart, status_put_cart, cart_data, status_delete_cart } =
    useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = localStorage.getItem("authToken");
    const idUser = localStorage.getItem("idUser");
    setCredentials({
      token,
      idUser,
    });
    dispatch(getCartById({ token, idUser }));
  }, []);

  useEffect(() => {
    const { token, idUser } = credentials;
    if (token && idUser) {
      dispatch(getCartById({ token, idUser }));
      console.log("Carrito only", cart_data);
    }
    setCartItems(cart_data.cartItems);

    if (status_get_cart === "rejected") {
      toast.error("Necesitas una cuenta para ver el carrito");
    }
  }, [
    dispatch,
    status_get_cart,
    status_put_cart,
    status_delete_cart,
    credentials,
  ]);

  function handleQuantity(item, isAdded) {
    const { token, idUser } = credentials;
    const productId = item.product.productId;
    const cartItemId = item.cartItemId;
    let quantity = 0;
    if (isAdded) {
      quantity = item.quantity + 1;
    } else if (item.quantity <= 0) {
      quantity = item.quantity;
    } else {
      quantity = item.quantity - 1;
    }

    dispatch(putCartItem({ token, cartItemId, productId, quantity }));
  }

  function deleteItem(item) {
    const { token, idUser } = credentials;
    const cartItemId = item.cartItemId;

    dispatch(deleteCartItem({ token, cartItemId }));
  }

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartItems == undefined && (
              <h1 className="no-items product">No hay objetos en el carrito</h1>
            )}
            {cartItems !== undefined &&
              cartItems.map((item) => {
                const product = item.product;
                return (
                  <div className="cart-list" key={item.cartItemId}>
                    <Row>
                      <Col className="image-holder" sm={4} md={3}>
                        <img src={product.img} alt="" />
                      </Col>
                      <Col sm={8} md={9}>
                        <Row className="cart-content justify-content-center">
                          <Col xs={12} sm={9} className="cart-details">
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <h4>
                              <span>${item.amount}</span>
                              <span>Cantidad: {item.quantity}</span>
                            </h4>
                          </Col>
                          <Col xs={12} sm={3} className="cartControl">
                            <button
                              className="incCart"
                              onClick={() => handleQuantity(item, true)}
                            >
                              <i className="fa-solid fa-plus"></i>
                            </button>
                            <button
                              className="desCart"
                              onClick={() => handleQuantity(item, false)}
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                          </Col>
                        </Row>
                      </Col>
                      <button
                        className="delete "
                        onClick={() => deleteItem(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      </button>
                    </Row>
                  </div>
                );
              })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Resumen</h2>
              <div className=" d_flex">
                <h4>Precio total :</h4>
                <h3>${cart_data.totalAmount}</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
