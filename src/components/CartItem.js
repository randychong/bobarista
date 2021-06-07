import React from "react";
import { useDispatch } from "react-redux";
import { ProductImage, Button } from "../styled-components/styled-components";
import { removeFromCart } from "../actions/cart-actions";

export default function CartItem(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <ProductImage src={props.item.img}></ProductImage>
      <p>{props.item.name}</p>
      <Button onClick={() => removeFromCart(dispatch, props.item.id)}>
        Remove from Cart
      </Button>
    </div>
  );
}
