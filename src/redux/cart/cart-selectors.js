import { createSelector } from "reselect";

//Creating an imput selector
const selectCart = (state) => state.cart;

// info: Creating an output selector that uses an input selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
