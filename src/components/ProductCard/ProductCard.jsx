import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ productId, title, productItem }) => {
  const router = useNavigate();

  const handelClick = () => {
    router(`/shop/${productItem.productId}`);
  };
  // const handelAdd = (productItem) => {
  //   dispatch(addToCart({ product: productItem, num: 1 }));
  //   toast.success("El producto ha sido añadido al carrito.");
  // };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.img}
        alt=""
      />
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <h3 onClick={() => handelClick()}>{productItem.title}</h3>

        <div className="price">
          <h4>${productItem.price}</h4>
          {/* <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handelAdd(productItem)}
          >
            <ion-icon name="add"></ion-icon>
          </button> */}
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
