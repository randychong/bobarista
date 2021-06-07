import { combineReducers } from "redux";
import Products from "../reducers/productsReducer";
import Cart from "../reducers/cartReducer";

const rootReducer = combineReducers({
  Products,
  Cart,
});

export default rootReducer;
