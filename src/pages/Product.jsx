import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../app/actions/productActions";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProductById(id));
    }
    console.log(data);
    setProduct(data);
  }, [status, dispatch]);

  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title={product?.title} />
      <ProductDetails selectedProduct={product} />{" "}
    </Fragment>
  );
};

export default Product;
