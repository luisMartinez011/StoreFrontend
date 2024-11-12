import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";

const ProductCard = ({ productId, title, productItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();

  // const [product, setProduct] = useState();
  // const { status, data } = useSelector((state) => state.product);

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(getProductById(productId));
  //   }
  //   console.log("Product id", productId);
  //   console.log("product by id", data);
  //   setProduct(data);
  // }, [status, dispatch]);

  const handelClick = () => {
    router(`/shop/${productItem.productId}`);
  };
  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("El producto ha sido añadido al carrito.");
  };
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
        <div className="rate">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="price">
          <h4>${productItem.price}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handelAdd(productItem)}
          >
            <ion-icon name="add"></ion-icon>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
