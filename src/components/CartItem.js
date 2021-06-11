import React from "react";
import { useDispatch } from "react-redux";
import {
  Image,
  Button,
  MenuCard,
  InfoContainer,
  ProductName,
  Info,
} from "../styled-components/styled-components";
import { removeFromCart } from "../actions/cart-actions";

export default function CartItem(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <MenuCard>
        <InfoContainer product>
          <Image product src={props.item.image}></Image>
        </InfoContainer>
        <InfoContainer product>
          <ProductName>{props.item.name}</ProductName>
          <Info>Quantity: {props.item.quantity}</Info>
          <Info>${props.item.price}</Info>
          <Button onClick={() => removeFromCart(dispatch, props.item.id)}>
            Remove from Cart
          </Button>
        </InfoContainer>
      </MenuCard>
    </div>
  );
}
