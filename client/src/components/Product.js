import React from "react";
import EditProductForm from "./EditProductForm";

class Product extends React.Component {
  state = {
    isFormOpen: false,
  };

  handleToggleForm = () => {
    this.setState((prevState) => {
      return { isFormOpen: !prevState.isFormOpen };
    });
  };

  handleAddToCart = () => {
    this.props.onAddToCart(this.props._id);
  };

  render() {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">${this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>
          {this.state.isFormOpen ? (
            <EditProductForm
              id={this.props._id}
              title={this.props.title}
              quantity={this.props.quantity}
              price={this.props.price}
              onEditSubmit={this.props.onEditSubmit}
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
          <a
            className="delete-button"
            onClick={() => {
              this.props.onDelete(this.props._id);
            }}
          >
            <span>X</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
