import React from "react";
import axios from "axios";
import EditProductForm from "./EditProductForm";
import store from "../lib/store";

class Product extends React.Component {
  state = {
    isFormOpen: false,
  };

  handleToggleForm = () => {
    this.setState((prevState) => {
      return { isFormOpen: !prevState.isFormOpen };
    });
  };

  handleDelete = () => {
    axios.delete(`/api/products/${this.props.product._id}`).then(() => {
      store.dispatch({
        type: "PRODUCT_DELETED",
        payload: { id: this.props.product._id },
      });
    });
  };

  handleEditSubmit = (product) => {
    axios
      .put(`/api/products/${this.props.product._id}`, product)
      .then((response) => response.data)
      .then((updatedProduct) => {
        store.dispatch({
          type: "PRODUCT_EDITED",
          payload: { product: updatedProduct },
        });
        this.handleToggleForm();
      });
  };

  // handleAddToCart = () => {
  //   this.props.onAddToCart(this.props._id);
  // };

  render() {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.product.title}</h3>
          <p className="price">${this.props.product.price}</p>
          <p className="quantity">
            {this.props.product.quantity} left in stock
          </p>
          {this.state.isFormOpen ? (
            <EditProductForm
              {...this.props.product}
              onEditSubmit={this.handleEditSubmit}
              onToggleForm={this.handleToggleForm}
            />
          ) : (
            <div className="actions product-actions">
              <a className="button add-to-cart" onClick={this.handleAddToCart}>
                Add to Cart
              </a>
              <a className="button edit" onClick={this.handleToggleForm}>
                Edit
              </a>
            </div>
          )}
          <a className="delete-button" onClick={this.handleDelete}>
            <span>X</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
