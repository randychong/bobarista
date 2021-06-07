import { combineReducers } from "redux";
import Products from "../reducers/productsReducer";

const rootReducer = combineReducers({
  Products,
});

export default rootReducer;
