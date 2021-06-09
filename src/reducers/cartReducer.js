import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
} from "../action-types/cart-types";

const initialState = { products: [], total: 0, quantity: 0 };

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
    case ADD_QUANTITY:
      break;
    default:
      break;
  }

  const singleProductTotal = newState.products.map(
    (product) => product.quantity * product.price
  );
  const updatedTotal = singleProductTotal.reduce(
    (sum, product) => sum + product,
    0
  );
  newState.total = updatedTotal;

  const cartQuantity = newState.products.map((product) => product.quantity);
  const updatedCartQuantity = cartQuantity.reduce(
    (sum, product) => sum + product,
    0
  );
  newState.quantity = updatedCartQuantity;

  return newState;
};

export default Cart;
