export default (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_FETCHED":
      return action.payload.products;
    case "PRODUCT_DELETED":
      return state.filter((product) => product._id !== action.payload.id);
    case "PRODUCT_ADDED":
      return state.concat(action.payload.product);
    case "PRODUCT_EDITED":
      return state.map((product) => {
        if (product._id === action.payload.product._id) {
          return action.payload.product;
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};
