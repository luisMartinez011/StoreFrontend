import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postCartItem } from "../../app/actions/cartActions";
import { useNavigate } from "react-router-dom";
import "./product-details.css";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  // ? Modal
  const handleAdd = (selectedProduct, quantity) => {
    const { token, idUser } = checkLocalStorage();
    if (token == undefined || idUser == undefined) {
      setShow(true);
      toast.error(
        "Se necesita una cuenta para crear agregar productos al carrito."
      );
    } else {
    }
    dispatch(
      postCartItem({
        token,
        idUser,
        productId: selectedProduct.productId,
        quantity,
      })
    );
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

  console.log(selectedProduct);
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

            {/* <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Autenticacion requerida</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Necesita la creacion de una cuenta para poder agregar productos
                al carrito
              </Modal.Body>
            </Modal> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
