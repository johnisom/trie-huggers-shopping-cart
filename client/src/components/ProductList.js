import React from "react";
import Product from "./Product";

const ProductList = function ProductList({ products }) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
