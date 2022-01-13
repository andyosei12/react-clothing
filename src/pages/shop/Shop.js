import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import { selectShopData } from "../../redux/shop/shop.selectors";

const Shop = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
});

export default connect(mapStateToProps)(Shop);
