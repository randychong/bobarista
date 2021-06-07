import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cartItems = useSelector((state) => state.Cart);
  return (
    <div>
      <h1>Your Cart</h1>
      <p>Number of Items: {cartItems.products.length}</p>
      <p>Total: ${cartItems.total}</p>
      {cartItems.products.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
}
