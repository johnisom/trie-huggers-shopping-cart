const decrementProductQuantity = (products, product) => {
  const newProducts = products.map((oldProduct) => {
    if (oldProduct._id === product._id) {
      return Object.assign({}, oldProduct, {
        quantity: oldProduct.quantity - 1,
      });
    } else {
      return oldProduct;
    }
  });

  return newProducts;
};

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
    case "ADDED_TO_CART":
      const { product } = action.payload;
      if (product.quantity === 0) {
        return state;
      }

      return decrementProductQuantity(state, product);
    default:
      return state;
  }
};
