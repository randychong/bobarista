import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

export default function ProductContainer() {
  const products = useSelector((state) => state.Products);

  return (
    <div>
      <h1>Products</h1>
      {products.products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
