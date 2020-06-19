import Product from "./Product.js";
import { connect } from "react-redux";
import axios from "axios";

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
  };
};

export default connect(null, mapDispatchToProps)(Product);
