import ShoppingCart from "./ShoppingCart.js";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  return {
    ...ownProps,
    cart: propsFromState.state.cart,
    onCheckout: () => {
      propsFromState.state.products.forEach((product) => {
        axios
          .put(`/api/products/${product._id}`, product)
          .then((response) => response.data)
          .then((updatedProduct) => {
            propsFromDispatch.dispatch({
              type: "PRODUCT_EDITED",
              payload: { product: updatedProduct },
            });
          });
      });

      propsFromDispatch.dispatch({ type: "CHECKOUT" });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ShoppingCart);
