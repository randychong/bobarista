import React from "react";
import { Button, ProductImage } from "../styled-components/styled-components";

export default function ProductCard(props) {
  return (
    <div>
      <ProductImage
        src={props.product.img}
        alt={props.product.name}
      ></ProductImage>
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
      <Button onClick={() => console.log("hello")}>Add to Cart</Button>
    </div>
  );
}
