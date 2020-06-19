import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductListContainer from "./ProductListContainer";
import AddProductForm from "./AddProductForm";
import axios from "axios";
import store from "../lib/store";
// TODO: implement redux with cart

/*

- ShopApp // state goes here
  - ShoppingCart // not to worry
  - ProductContainer
    - ProductList
      - Product
        - EditProductForm
      - ⋮
    - AddProductForm
*/

class ShopApp extends React.Component {
  state = {
    products: [],
    cart: [],
  };

  decrementProductQuantity = (id) => {
    this.setState((prevState) => {
      const products = prevState.products.map((product) => {
        if (product._id === id) {
          return Object.assign({}, product, { quantity: product.quantity - 1 });
        } else {
          return product;
        }
      });
      return { products };
    });
  };

  incrementCartProductQuantity = (id) => {
    this.setState((prevState) => {
      const cart = prevState.cart.map((product) => {
        if (product._id === id) {
          return Object.assign({}, product, { quantity: product.quantity + 1 });
        } else {
          return product;
        }
      });
      return { cart };
    });
  };

  isZeroQuantity = (id) => {
    const product = this.findProduct(id);

    return product.quantity === 0;
  };

  indexInCart = (id) => {
    return this.state.cart.findIndex((product) => {
      return product._id === id;
    });
  };

  findProduct = (id) => {
    return this.state.products.find((product) => {
      return product._id === id;
    });
  };

  addNewProductToCart = (product) => {
    this.setState((prevState) => {
      return {
        cart: prevState.cart.concat(
          Object.assign({}, product, { quantity: 1 })
        ),
      };
    });
  };

  isFoundInCart = (id) => {
    let indexInCart = this.indexInCart(id);
    return indexInCart !== -1;
  };

  handleAddToCart = (id) => {
    if (this.isZeroQuantity(id)) {
      return;
    }

    let product = this.findProduct(id);
    if (this.isFoundInCart(id)) {
      this.incrementCartProductQuantity(id);
    } else {
      this.addNewProductToCart(product);
    }

    this.decrementProductQuantity(id);
  };

  handleCartEmpty = () => {
    // TODO: implement this
  };

  render() {
    return (
      <div id="app">
        <ShoppingCart cart={this.state.cart} />

        <main>
          <ProductListContainer />
          <AddProductForm />
        </main>
      </div>
    );
  }
}

export default ShopApp;
