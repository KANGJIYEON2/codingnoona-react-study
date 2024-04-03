import { combineReducers } from "redux";
import productReducer from "./productSlice";
import authenticateReducer from "./authenticateReducer";

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
