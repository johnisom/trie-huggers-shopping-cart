import React from "react";
import Product from "./Product";

const ProductList = function ProductList({
  products,
  onProductDelete,
  onEditSubmit,
}) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product._id}
          {...product}
          onDelete={onProductDelete}
          onEditSubmit={onEditSubmit}
        />
      ))}
    </div>
  );
};

export default ProductList;
