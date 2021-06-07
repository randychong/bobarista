import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ProductImage } from "../styled-components/styled-components";
import { addToCart } from "../actions/cart-actions";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <ProductImage
        src={props.product.img}
        alt={props.product.name}
      ></ProductImage>
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
      <Button onClick={() => addToCart(dispatch, props.product)}>
        Add to Cart
      </Button>
    </div>
  );
}
