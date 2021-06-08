import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const products = useSelector((state) => state.Products);

  return (
    <div>
      <h1>Menu</h1>
      {products.products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
