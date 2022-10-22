import React, { useState } from "react";
import logo from "./logo.svg";

import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardBody, Row, Col, Container } from "reactstrap";
import "./App.css";
const itemArr = new Array(9).fill("none");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArr.fill("none");
  };

  const checkIsWinner = () => {
    if (
      itemArr[0] === itemArr[1] &&
      itemArr[1] === itemArr[2] &&
      itemArr[0] !== "none"
    ) {
      setWinMessage(`${itemArr[0]} wins`);
    } else if (
      itemArr[3] === itemArr[4] &&
      itemArr[3] === itemArr[5] &&
      itemArr[3] !== "none"
    ) {
      setWinMessage(`${itemArr[3]} wins`);
    } else if (
      itemArr[6] === itemArr[7] &&
      itemArr[6] === itemArr[8] &&
      itemArr[6] !== "none"
    ) {
      setWinMessage(`${itemArr[6]} wins`);
    } else if (
      itemArr[0] === itemArr[3] &&
      itemArr[0] === itemArr[6] &&
      itemArr[0] !== "none"
    ) {
      setWinMessage(`${itemArr[0]} wins`);
    } else if (
      itemArr[1] === itemArr[4] &&
      itemArr[1] === itemArr[7] &&
      itemArr[1] !== "none"
    ) {
      setWinMessage(`${itemArr[1]} wins`);
    } else if (
      itemArr[2] === itemArr[5] &&
      itemArr[2] === itemArr[8] &&
      itemArr[2] !== "none"
    ) {
      setWinMessage(`${itemArr[2]} wins`);
    } else if (
      itemArr[0] === itemArr[4] &&
      itemArr[0] === itemArr[8] &&
      itemArr[0] !== "none"
    ) {
      setWinMessage(`${itemArr[0]} wins`);
    } else if (
      itemArr[2] === itemArr[4] &&
      itemArr[2] === itemArr[6] &&
      itemArr[2] !== "none"
    ) {
      setWinMessage(`${itemArr[2]} wins`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArr[itemNumber] === "none") {
      itemArr[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload the Game
              </Button>
            </div>
          ) : (
            <h1 className="text-color text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArr.map((item, index) => {
              return (
                <Card
                  color="warning"
                  onClick={() => {
                    changeItem(index);
                  }}
                >
                  <CardBody className="box">
                    <Icon name={item}> </Icon>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
