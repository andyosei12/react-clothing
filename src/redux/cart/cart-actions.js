export const toggleCartDropDown = () => ({
  type: "TOGGLE_CART_DROPDOWN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const clearlCartItem = (item) => ({
  type: "CLEAR_CART_ITEM",
  payload: item,
});
