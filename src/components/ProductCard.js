import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ProductImage } from "../styled-components/styled-components";
import { addToCart } from "../actions/cart-actions";
import {
  MenuCard,
  MenuInfo,
  ProductName,
  Info,
} from "../styled-components/styled-components";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart);
  return (
    <div>
      <MenuCard>
        <MenuInfo>
          <ProductImage
            src={props.product.image}
            alt={props.product.name}
          ></ProductImage>
        </MenuInfo>
        <MenuInfo>
          <ProductName>{props.product.name}</ProductName>
          <Info>${props.product.price}</Info>
          <Button add onClick={() => addToCart(dispatch, props.product, cart)}>
            Add to Cart
          </Button>
        </MenuInfo>
      </MenuCard>
    </div>
  );
}
