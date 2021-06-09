import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { MenuContainer } from "../styled-components/styled-components";

export default function Cart() {
  const cartItems = useSelector((state) => state.Cart);
  return (
    <div>
      <h1>Your Cart</h1>
      <p>Number of Items: {cartItems.quantity}</p>
      <p>Total: ${cartItems.total}</p>
      <MenuContainer>
        {cartItems.products.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </MenuContainer>
    </div>
  );
}
