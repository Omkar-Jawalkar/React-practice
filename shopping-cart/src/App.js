import React, { useState } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import BuySection from "./Components/BuySection";
import Cart from "./Components/Cart";
import { Col, Container, Row } from "reactstrap";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("already added in cart", { type: "error" });
      return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Thankyou for buying", { type: "success" });
  };

  const removeItems = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="8">
          <BuySection addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart
            cartItem={cartItem}
            removeItem={removeItems}
            buyNow={buyNow}
          ></Cart>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
