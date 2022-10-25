import { Button } from "reactstrap";
import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";

const BuyCard = ({ product, addInCart }) => {
  return (
    // <div>
    //   {product.productPrice}
    //   {console.log(product.productPrice)}
    // </div>

    <Card style={{ margin: "8px" }}>
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>Name : {product.productName}</CardTitle>
        <CardText className="secondary">Price : {product.productPrice}</CardText>
        <Button className="bg-warning text-dark" onClick={() => addInCart(product)}>

          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default BuyCard;
