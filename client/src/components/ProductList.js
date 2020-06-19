import React, { Component } from "react";
import ProductContainer from "./ProductContainer";
import store from "../lib/store";

class ProductList extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>
        {this.props.products.map((product) => (
          /* Note: maybe don't pass id */
          <ProductContainer key={product._id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
