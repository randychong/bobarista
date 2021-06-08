import React from "react";
import { useDispatch } from "react-redux";
import { Button, ProductImage } from "../styled-components/styled-components";
import { addToCart } from "../actions/cart-actions";
import {
  MenuCard,
  MenuInfo,
  ProductName,
  ProductInfo,
} from "../styled-components/styled-components";

export default function ProductCard(props) {
  const dispatch = useDispatch();
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
          <ProductInfo>${props.product.price}</ProductInfo>
          <Button add onClick={() => addToCart(dispatch, props.product)}>
            Add to Cart
          </Button>
        </MenuInfo>
      </MenuCard>
    </div>
  );
}
