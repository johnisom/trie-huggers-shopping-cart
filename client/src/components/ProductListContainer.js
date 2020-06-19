import ProductList from "./ProductList.js";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchProducts: () => {
      axios
        .get("/api/products")
        .then((response) => response.data)
        .then((products) => {
          dispatch({
            type: "PRODUCTS_FETCHED",
            payload: { products },
          });
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
