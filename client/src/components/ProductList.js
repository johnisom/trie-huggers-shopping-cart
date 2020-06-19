import React, { Component } from "react";
import Product from "./Product";
import store from "../lib/store";

class ProductList extends Component {
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
