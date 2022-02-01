import React from "react";
import { Route } from "react-router-dom";
// import SHOP_DATA from "./shop-data";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";

const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
