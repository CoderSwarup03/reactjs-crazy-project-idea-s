import React from "react";
import ProductCard from "./ProductCart";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Smartphone", price: 30000 },
  { id: 4, name: "Keyboard", price: 1500 },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
