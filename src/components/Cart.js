import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { MenuContainer, Image } from "../styled-components/styled-components";
import Footer from "../components/Footer";
import cartImage from "../images/empty-cart.png";

export default function Cart() {
  const cartItems = useSelector((state) => state.Cart);
  return (
    <div>
      <h1>Your Cart</h1>
      <p>Number of Items: {cartItems.quantity}</p>
      <p>Total: ${cartItems.total}</p>
      <MenuContainer>
        {cartItems.products.length !== 0 ? (
          cartItems.products.map((item) => (
            <CartItem item={item} key={item.id} />
          ))
        ) : (
          <Image cart src={cartImage}></Image>
        )}
      </MenuContainer>
      <Footer></Footer>
    </div>
  );
}
