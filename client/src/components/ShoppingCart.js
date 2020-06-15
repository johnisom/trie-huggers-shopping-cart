import React from "react";

const ShoppingCart = function ShoppingCart() {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
      <p>Total: $0</p>
      <a className="button checkout disabled">Checkout</a>
    </div>
  );
};

export default ShoppingCart;
