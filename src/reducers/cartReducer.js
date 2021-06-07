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
      break;
    case REMOVE_FROM_CART:
      newState = {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
      break;
    default:
      break;
  }

  newState.total = newState.products.reduce(
    (sum, product) => sum + product.price,
    0
  );
  return newState;
};

export default Cart;
