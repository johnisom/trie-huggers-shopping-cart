import React from "react";
import axios from "axios";
import store from "../lib/store";

class AddProductForm extends React.Component {
  state = {
    title: "",
    quantity: "",
    price: "",
    isFormOpen: false,
  };

  handleToggleForm = () => {
    this.setState((prevState) => {
      return { isFormOpen: !prevState.isFormOpen };
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAddSubmit = (event) => {
    event.preventDefault();

    const product = {
      title: this.state.title,
      quantity: this.state.quantity,
      price: this.state.price,
    };

    axios
      .post("/api/products", product)
      .then((response) => response.data)
      .then((newProduct) => {
        store.dispatch({
          type: "PRODUCT_ADDED",
          payload: { product: newProduct },
        });
      });

    this.setState({
      title: "",
      quantity: "",
      price: "",
      isFormOpen: false,
    });
  };

  render() {
    return (
      <div className={`add-form ${this.state.isFormOpen ? "visible" : ""}`}>
        <p>
          <a
            className="button add-product-button"
            onClick={this.handleToggleForm}
          >
            Add A Product
          </a>
        </p>
        <h3>Add Product</h3>
        <form onSubmit={this.handleAddSubmit}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              name="title"
              type="text"
              onChange={this.handleInputChange}
              id="product-name"
              value={this.state.title}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              name="price"
              type="text"
              onChange={this.handleInputChange}
              id="product-price"
              value={this.state.price}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              name="quantity"
              type="text"
              onChange={this.handleInputChange}
              id="product-quantity"
              value={this.state.quantity}
            />
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={this.handleAddSubmit}>
              Add
            </a>
            <a className="button" onClick={this.handleToggleForm}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProductForm;
