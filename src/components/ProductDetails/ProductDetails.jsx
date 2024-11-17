import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postCartItem } from "../../app/actions/cartActions";
import { useNavigate } from "react-router-dom";
import "./product-details.css";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  // const cartItemSelector = useSelector((state) => state.cart.status_post);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (selectedProduct, quantity) => {
    const { token, idUser } = checkLocalStorage();
    if (token == undefined || idUser == undefined) {
      toast.error(
        "Se necesita una cuenta para crear agregar productos al carrito."
      );
    } else {
      dispatch(
        postCartItem({
          token,
          idUser,
          productId: selectedProduct.productId,
          quantity,
        })
      );
      toast.success("Producto agregado al carrito.");
    }
  };

  const handleQuantityChange = (e) => {
    const currentQuantity = e.target.value;

    if (currentQuantity < 0) {
      setQuantity(0);
    } else {
      setQuantity(currentQuantity);
    }
  };

  function checkLocalStorage() {
    const token = localStorage.getItem("authToken");
    const idUser = localStorage.getItem("idUser");

    return { token, idUser };
  }

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={selectedProduct?.img} alt="" />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName}</h2>

            <div className="info">
              <span className="price">${selectedProduct?.price}</span>
              {/* <span>Categoria: {selectedProduct?.category}</span> */}
            </div>
            <p>{selectedProduct?.description}</p>
            <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handleAdd(selectedProduct, quantity)}
            >
              Agregar al carrito
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
