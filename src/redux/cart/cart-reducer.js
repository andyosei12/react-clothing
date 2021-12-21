const initialState = {
  cartDropdown: false,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_CART_DROPDOWN") {
    return {
      ...state,
      cartDropdown: !state.cartDropdown,
    };
  }
  return initialState;
};

export default cartReducer;
