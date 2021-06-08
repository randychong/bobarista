import React from "react";
import { useDispatch } from "react-redux";
import { ProductImage, Button } from "../styled-components/styled-components";
import { removeFromCart } from "../actions/cart-actions";
import {
  MenuCard,
  MenuInfo,
  ProductName,
  ProductPrice,
} from "../styled-components/styled-components";

export default function CartItem(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <MenuCard>
        <MenuInfo>
          <ProductImage src={props.item.img}></ProductImage>
        </MenuInfo>
        <MenuInfo>
          <ProductName>{props.item.name}</ProductName>
          <ProductPrice>${props.item.price}</ProductPrice>
          <Button onClick={() => removeFromCart(dispatch, props.item.id)}>
            Remove from Cart
          </Button>
        </MenuInfo>
      </MenuCard>
    </div>
  );
}
