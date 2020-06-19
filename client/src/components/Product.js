import React from "react";
import axios from "axios";
import EditProductFormContainer from "./EditProductFormContainer";

const Product = ({
  product,
  isFormOpen,
  onToggleForm,
  onDelete,
  onAddToCart,
}) => {
  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        {isFormOpen ? (
          <EditProductFormContainer {...product} onToggleForm={onToggleForm} />
        ) : (
          <div className="actions product-actions">
            <a
              className="button add-to-cart"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </a>
            <a className="button edit" onClick={onToggleForm}>
              Edit
            </a>
          </div>
        )}
        <a className="delete-button" onClick={onDelete}>
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
