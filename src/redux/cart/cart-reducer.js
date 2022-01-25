import { addItemToCart, removeItemFromCart } from "./cart-utils";
import cartTypes from "./carttypes";
const initialState = {
  cartDropdown: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === cartTypes.TOGGLE_CART_DROPDOWN) {
    return {
      ...state,
      cartDropdown: !state.cartDropdown,
    };
  }
  if (action.type === cartTypes.ADD_ITEM) {
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload),
    };
  }
  if (action.type === cartTypes.REMOVE_ITEM) {
    return {
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.payload),
    };
  }
  if (action.type === cartTypes.CLEAR_CART_ITEM) {
    return {
      ...state,
      cartItems: state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      ),
    };
  }
  return state;
};

export default cartReducer;
