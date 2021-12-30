import { addItemToCart } from "./cart-utils";
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
  return initialState;
};

export default cartReducer;
