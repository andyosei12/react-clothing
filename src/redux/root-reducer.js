import { combineReducers } from "redux";

//info: reducers
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
