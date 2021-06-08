import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ProductImage } from "../styled-components/styled-components";
import { addToCart, removeFromCart } from "../actions/cart-actions";
import {
  MenuCard,
  MenuInfo,
  ProductName,
  ProductInfo,
} from "../styled-components/styled-components";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  const addedToCartList = useSelector((state) => {
    return state.Products.products.find(
      (product) => product.id === props.product.id
    );
  });
  const test = useSelector((state) => state.Products.products[0].id);
  console.log(test);

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
          {!addedToCartList ? (
            <Button onClick={() => removeFromCart(dispatch, props.product.id)}>
              Remove from Cart
            </Button>
          ) : (
            <Button add onClick={() => addToCart(dispatch, props.product)}>
              Add to Cart
            </Button>
          )}
        </MenuInfo>
      </MenuCard>
    </div>
  );
}
