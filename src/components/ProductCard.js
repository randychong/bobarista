import React from "react";

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
    </div>
  );
}
