import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { serviceData } from "../../utils/products";

const Wrapper = () => {
  return (
    <section className="wrapper background">
      <h3>
        Bienvenidos, tu tienda en línea de confianza donde encontrarás todo lo
        que necesitas en un solo lugar. Desde productos de alta calidad hasta
        ofertas exclusivas, estamos comprometidos en ofrecerte una experiencia
        de compra cómoda, segura y personalizada. Navega por nuestra amplia
        selección de artículos, desde electrónica y moda hasta hogar y belleza,
        y descubre productos cuidadosamente seleccionados para mejorar tu estilo
        de vida. Con envíos rápidos y atención al cliente excepcional, comprar
        aqui es fácil, rápido y confiable. ¡Explora nuestras categorías y
        encuentra lo que buscas hoy mismo!
      </h3>
    </section>
  );
};

export default Wrapper;
