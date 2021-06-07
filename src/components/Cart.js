import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cartItem = useSelector((state) => state.Cart);
  return (
    <div>
      <h1>Cart</h1>
      {cartItem.products.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
}
