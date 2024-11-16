import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../app/actions/productActions";

const Product = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState();
  const dispatch = useDispatch();
  const { status_product, product } = useSelector((state) => state.product);
  const [loadProduct, setLoadProduct] = useState(false);

  useEffect(() => {
    if (status_product === "idle" || loadProduct === false) {
      dispatch(getProductById(id));
      setLoadProduct(true);
    }
    setProductDetails(product);
  }, [status_product, dispatch]);

  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title={productDetails?.title} />
      <ProductDetails selectedProduct={productDetails} />{" "}
    </Fragment>
  );
};

export default Product;
