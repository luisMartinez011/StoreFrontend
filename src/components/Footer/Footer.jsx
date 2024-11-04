import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className='box'>
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Tienda en Linea</h1>
            </div>
            <p>Pagina de comercio electronico usando React y .NET Core</p>
          </Col>
          {/* <Col md={3} sm={5} className='box'>
            <h2>Detalles</h2>
            <ul>

            </ul>
          </Col> */}

        </Row>
      </Container>
    </footer>
  )
}

export default Footer
