import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState, useEffect } from "react";
// import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../app/actions/productActions";

const Shop = () => {
  // const [filterList, setFilterList] = useState(
  //   products.filter((item) => item.category === "sofa")
  // );
  useWindowScrollToTop();

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProducts());
    }
    setProducts(data);
  }, [status, dispatch]);
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
          <ShopList productItems={products} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
