import ShopActionTypes from "./shop.types";

const initialState = {
  shopData: {},
};

const shopReducer = (state = initialState, action) => {
  if (action.type === ShopActionTypes.UPDATE_COLLECTIONS) {
    return {
      ...state,
      shopData: action.payload,
    };
  }
  return state;
};

export default shopReducer;
