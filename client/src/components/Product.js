import React from "react";
import EditProductForm from "./EditProductForm";

const Product = function Product({
  title,
  quantity,
  price,
  _id,
  onDelete,
  onEditSubmit,
}) {
  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <a
          className="delete-button"
          onClick={() => {
            onDelete(_id);
          }}
        >
          <span>X</span>
        </a>
      </div>

      <EditProductForm
        title={title}
        quantity={quantity}
        price={price}
        onSubmit={onEditSubmit}
      />
    </div>
  );
};

export default Product;
