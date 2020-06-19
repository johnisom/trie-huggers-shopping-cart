const incrementCartProductQuantity = (cart, product) => {
  const newCart = cart.map((cartProduct) => {
    if (cartProduct._id === product._id) {
      return Object.assign({}, cartProduct, {
        quantity: cartProduct.quantity + 1,
      });
    } else {
      return cartProduct;
    }
  });

  return newCart;
};

const addNewProductToCart = (cart, product) => {
  return cart.concat(Object.assign({}, product, { quantity: 1 }));
};

const isFoundInCart = (cart, product) => {
  const index = cart.findIndex((cartProduct) => {
    return cartProduct._id === product._id;
  });

  return index !== -1;
};

const handleAddToCart = (cart, product) => {
  if (isFoundInCart(cart, product)) {
    return incrementCartProductQuantity(cart, product);
  } else {
    return addNewProductToCart(cart, product);
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case "CHECKOUT":
      return [];
    case "ADDED_TO_CART":
      const { product } = action.payload;
      if (product.quantity === 0) {
        return state;
      }

      return handleAddToCart(state, product);
    default:
      return state;
  }
};
