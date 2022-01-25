import cartTypes from "./carttypes";

export const toggleCartDropDown = () => ({
  type: cartTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartTypes.REMOVE_ITEM,
  payload: item,
});

export const clearlCartItem = (item) => ({
  type: cartTypes.CLEAR_CART_ITEM,
  payload: item,
});
