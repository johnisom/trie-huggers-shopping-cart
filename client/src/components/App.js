import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
// State
import productData from "../lib/data";
import axios from "axios";

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

  handleAddSubmit = (product) => {
    axios
      .post("/api/products", product)
      .then((response) => response.data)
      .then((newProduct) => {
        this.setState((prevState) => {
          return { products: prevState.products.concat(newProduct) };
        });
      });
  };

  handleProductDelete = (productId) => {
    axios.delete(`/api/products/${productId}`).then(() => {
      this.setState((prevState) => {
        const products = prevState.products.filter((product) => {
          return product._id !== productId;
        });

        return { products };
      });
    });
  };

  handleEditSubmit = (product) => {
    axios
      .put(`/api/products/${product._id}`, product)
      .then((response) => response.data)
      .then((updatedProduct) => {
        this.setState((prevState) => {
          const products = prevState.products.map((product) => {
            if (product._id === updatedProduct._id) {
              return updatedProduct;
            } else {
              return product;
            }
          });

          return { products };
        });
      });
  };

  componentDidMount() {
    axios
      .get("/api/products")
      .then((response) => response.data)
      .then((products) => {
        this.setState({ products });
      });
  }

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <ShoppingCart />
        </header>

        <main>
          <ProductList
            products={this.state.products}
            onProductDelete={this.handleProductDelete}
            onEditSubmit={this.handleEditSubmit}
          />
          <AddProductForm onAddSubmit={this.handleAddSubmit} />
        </main>
      </div>
    );
  }
}

export default ShopApp;
