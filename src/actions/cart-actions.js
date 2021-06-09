import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
} from "../action-types/cart-types";

export const addToCart = (dispatch, product, cart) => {
  // accept 3 arguemnts, dispatch, product {}, cart [{}]
  // const inmycartfool = cart.includes(cartitem => cart.id === product.id)
  // if it exist, we can increment the key: amount: 1
  // if(inmycartfool){
  // product.quanitty = product.quanty + 1
  //}
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

export const addQuantity = (dispatch, product) => {
  dispatch({
    type: ADD_QUANTITY,
    payload: product,
  });
};
