import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
} from "../action-types/cart-types";

export const addToCart = (dispatch, product, cart) => {
  if (cart.products.includes(product)) {
    addQuantity(dispatch, product);
  } else {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  }
};

export const removeFromCart = (dispatch, product, cart) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: product,
  });
};

export const addQuantity = (dispatch, product) => {
  const updatedProduct = product;
  updatedProduct.quantity = product.quantity + 1;
  dispatch({
    type: ADD_QUANTITY,
    payload: updatedProduct,
  });
};
