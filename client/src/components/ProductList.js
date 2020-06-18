import React, { Component } from "react";
import Product from "./Product";
import store from "../lib/store";

// const ProductList = function ProductList() {
class ProductList extends Component {
  // {
  // products,
  // onAddToCart,
  // onProductDelete,
  // onEditSubmit,
  // }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>
        {store.getState().products.map((product) => (
          /* Note: maybe don't pass id */
          <Product key={product._id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
