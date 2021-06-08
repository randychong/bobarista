import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { MenuContainer } from "../styled-components/styled-components";

export default function ProductPage() {
  const products = useSelector((state) => state.Products);

  return (
    <div>
      <h1>Menu</h1>
      <MenuContainer>
        {products.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </MenuContainer>
    </div>
  );
}
