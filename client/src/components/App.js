import React from "react";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
// State
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
    cart: [],
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

  handleEditSubmit = (product, id) => {
    axios
      .put(`/api/products/${id}`, product)
      .then((response) => response.data)
      .then((updatedProduct) => {
        this.setState((prevState) => {
          const products = prevState.products.map((product) => {
            if (id === updatedProduct._id) {
              return updatedProduct;
            } else {
              return product;
            }
          });

          return { products };
        });
      });
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
          <ShoppingCart products={this.state.products} cart={this.state.cart} />
        </header>

        <main>
          <ProductList
            products={this.state.products}
            onAddToCart={this.handleAddToCart}
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
