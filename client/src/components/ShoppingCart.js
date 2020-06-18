import React from "react";
import store from "../lib/store";
// TODO: implement redux with cart

const ShoppingCart = function ShoppingCart({ cart, onCartEmpty }) {
  const items = cart.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.title}</td>
        <td>{item.quantity}</td>
        <td>${item.price}</td>
      </tr>
    );
  });

  const total = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <header>
      <h1>The Shop!</h1>
      {cart.length === 0 ? (
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: ${}</p>
          <a className="button checkout disabled">Checkout</a>
        </div>
      ) : (
        <div class="cart">
          <h2>Your Cart</h2>
          <table class="cart-items">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items}
              <tr>
                <td colspan="3" class="total">
                  Total: ${total()}
                </td>
              </tr>
            </tbody>
          </table>
          <a class="button checkout" onClick={onCartEmpty}>
            Checkout
          </a>
        </div>
      )}
    </header>
  );
};

export default ShoppingCart;
