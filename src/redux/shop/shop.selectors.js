import { createSelector } from "reselect";
import memoize from "lodash.memoize";

export const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopData], (shopData) => shopData[collectionUrlParam])
);
