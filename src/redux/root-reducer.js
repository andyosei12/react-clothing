import { combineReducers } from "redux";

//info: reducers
import userReducer from "./user/user-reducer";

export default combineReducers({
  user: userReducer,
});
