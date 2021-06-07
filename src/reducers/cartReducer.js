import { ADD_TO_CART, REMOVE_FROM_CART } from "../action-types/cart-types";

const initialState = { products: [], total: 0 };

const Cart = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case ADD_TO_CART:
      newState = {
        ...state,
        products: [...state.products, action.payload],
      };
      return newState;
    case REMOVE_FROM_CART:
      newState = {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
      return newState;
    default:
      return state;
  }
};

export default Cart;
