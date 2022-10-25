import React, { useEffect, useState } from "react";
import Axios from "axios";

import { random, commerce } from "faker";
import { Container, Col, Row, Card } from "reactstrap";
import BuyCard from "./BuyCard";

const url = "http://myjson.dit.upm.es/api/bins/5i68";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url);
    const { photos } = data;

    const allProduct = photos.map((photos) => ({
      smallImage: photos.src.medium,
      tinyImage: photos.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div style={{ width: "900px" }}>
      <Container
        className="d-grid"
        style={{ colGap: "5px", rowGap: "5px" }}
        fluid
      >
        <h1 className="text-success text-center">Buy Page</h1>
        <Row>
          {product.map((product) => (
            // <span key={product.id}>

            //   {product.productName}
            // </span>
            <Col className="col-md-4" key={product.id}>
              <BuyCard addInCart={addInCart} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default BuyPage;
