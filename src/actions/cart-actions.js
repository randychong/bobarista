import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cart-types";

export const addToCart = (dispatch, product) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const removeFromCart = (dispatch, product) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: product,
  });
};
