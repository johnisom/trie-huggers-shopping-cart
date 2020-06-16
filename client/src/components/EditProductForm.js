import React from "react";

class EditProductForm extends React.Component {
  state = {
    title: this.props.title,
    quantity: this.props.quantity,
    price: this.props.price,
    isFormOpen: false,
  };

  //TODO: handle input changes
  //TODO: hiding/showing form

  //TODO:
  // handleSubmit = () => {
  // };

  //TODO:
  // handleEdit

  //TODO:
  // add onClick to update button and onSubmit to form

  render() {
    return (
      <div class="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value={this.state.title} />
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value={this.state.price} />
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={this.state.quantity} />
          </div>

          <div class="actions form-actions">
            <a class="button" onSubmit={this.handleSubmit}>
              Update
            </a>
            <a class="button">Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProductForm;
