import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
// State
import productData from "../lib/data";

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
  };

  componentDidMount() {
    fetch('api/products')
    this.setState({ products: productData });
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <ShoppingCart />
        </header>

        <main>
          <ProductList products={this.state.products} />
          <AddProductForm />
        </main>
      </div>
    );
  }
}

export default ShopApp;
