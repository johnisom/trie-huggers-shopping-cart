import EditProductForm from "./EditProductForm.js";
import { connect } from "react-redux";
import axios from "axios";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditSubmit: (product) => {
      axios
        .put(`/api/products/${ownProps._id}`, product)
        .then((response) => response.data)
        .then((updatedProduct) => {
          dispatch({
            type: "PRODUCT_EDITED",
            payload: { product: updatedProduct },
          });
          ownProps.onToggleForm();
        });
    },
  };
};

export default connect(null, mapDispatchToProps)(EditProductForm);
