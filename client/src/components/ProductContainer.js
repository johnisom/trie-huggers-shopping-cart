import React from "react";
import Product from "./Product.js";
import { connect } from "react-redux";
import axios from "axios";

class ProductContainer extends React.Component {
  state = {
    isFormOpen: false,
  };

  handleToggleForm = () => {
    this.setState((prevState) => {
      return { isFormOpen: !prevState.isFormOpen };
    });
  };

  render() {
    return (
      <Product
        isFormOpen={this.state.isFormOpen}
        onToggleForm={this.handleToggleForm}
        onDelete={this.props.onDelete}
        onAddToCart={this.props.onAddToCart}
        product={this.props.product}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => {
      axios.delete(`/api/products/${ownProps.product._id}`).then(() => {
        dispatch({
          type: "PRODUCT_DELETED",
          payload: { id: ownProps.product._id },
        });
      });
    },

    onAddToCart: (product) => {
      dispatch({
        type: "ADDED_TO_CART",
        payload: { product },
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductContainer);
