import React from "react";
import { useDispatch } from "react-redux";
import { Button, ProductImage } from "../styled-components/styled-components";
import { addToCart } from "../actions/cart-actions";
import {
  MenuCard,
  MenuInfo,
  ProductName,
  ProductPrice,
} from "../styled-components/styled-components";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <MenuCard>
        <MenuInfo>
          <ProductImage
            src={props.product.img}
            alt={props.product.name}
          ></ProductImage>
        </MenuInfo>
        <MenuInfo>
          <ProductName>{props.product.name}</ProductName>
          <ProductPrice>${props.product.price}</ProductPrice>
          <Button add onClick={() => addToCart(dispatch, props.product)}>
            Add to Cart
          </Button>
        </MenuInfo>
      </MenuCard>
    </div>
  );
}
