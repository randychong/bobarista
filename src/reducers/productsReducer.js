import { GET_PRODUCTS } from "../action-types/product-types";
import Data from "../data/data";

const initialState = Data;

const Products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Products;
