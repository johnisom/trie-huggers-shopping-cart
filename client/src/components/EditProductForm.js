import React from "react";

class EditProductForm extends React.Component {
  state = {
    title: this.props.title,
    quantity: this.props.quantity,
    price: this.props.price,
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const product = {
      title: this.state.title,
      quantity: this.state.quantity,
      price: this.state.price,
    };

    this.props.onEditSubmit(product, this.props.id);
    this.props.onToggleForm();
  };

  render() {
    return (
      <div className="edit-form ">
        <h3>Edit Product</h3>
        <form>
          <div className="input-group">
            <label for="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="input-group">
            <label for="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              value={this.state.price}
              name="price"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="input-group">
            <label for="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              value={this.state.quantity}
              name="quantity"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={this.handleSubmit}>
              Update
            </a>
            <a className="button" onClick={this.props.onToggleForm}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProductForm;
