import { addItemToCart, removeItemFromCart } from "./cart-utils";
const initialState = {
  cartDropdown: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_CART_DROPDOWN") {
    return {
      ...state,
      cartDropdown: !state.cartDropdown,
    };
  }
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload),
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.payload),
    };
  }
  if (action.type === "CLEAR_CART_ITEM") {
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
