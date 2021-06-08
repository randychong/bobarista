import React from "react";
import { useDispatch } from "react-redux";
import { ProductImage, Button } from "../styled-components/styled-components";
import { removeFromCart } from "../actions/cart-actions";
import {
  MenuCard,
  MenuInfo,
  ProductName,
  ProductInfo,
} from "../styled-components/styled-components";

export default function CartItem(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <MenuCard>
        <MenuInfo>
          <ProductImage src={props.item.image}></ProductImage>
        </MenuInfo>
        <MenuInfo>
          <ProductName>{props.item.name}</ProductName>
          <ProductInfo>${props.item.price}</ProductInfo>
          <ProductInfo>Quantity: {props.item.quantity}</ProductInfo>
          <Button onClick={() => removeFromCart(dispatch, props.item.id)}>
            Remove from Cart
          </Button>
        </MenuInfo>
      </MenuCard>
    </div>
  );
}
