import React from "react";
import Button from "../styled-components/styled-components";

export default function ProductCard(props) {
  return (
    <div>
      <img
        src={props.product.img}
        alt={props.product.name}
        className="product-img"
      ></img>
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
      <Button onClick={() => console.log("hello")}>Add to Cart</Button>
    </div>
  );
}
