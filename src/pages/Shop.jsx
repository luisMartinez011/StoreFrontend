import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState, useEffect } from "react";
// import { products } from "../utils/products";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../app/actions/productActions";
import ProductCard from "../components/ProductCard/ProductCard";
const Shop = () => {
  // const [filterList, setFilterList] = useState(
  //   products.filter((item) => item.category === "sofa")
  // );
  useWindowScrollToTop();

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { status_list_products, list_products } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (status_list_products === "idle") {
      dispatch(getProducts());
    }
    console.log("shop componente", list_products);
    setProducts(list_products);
  }, [status_list_products, dispatch]);
  return (
    <Fragment>
      {/* <Banner title="product" /> */}
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            {/* !Categorias menu */}
            {/* <Col md={4} className="justify-content-center">
              <FilterSelect setFilterList={setFilterList} />
            </Col> */}
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            {products.map((productItem) => {
              return (
                <ProductCard
                  key={productItem.productId}
                  title={null}
                  productId={productItem.productId}
                  productItem={productItem}
                />
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
