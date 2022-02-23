import React from "react";
import { Route } from "react-router-dom";
// import SHOP_DATA from "./shop-data";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";
import {
  convertCollectionsSnapshotToMap,
  // retrieveCollectionData,
  firestore,
} from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    this.unsubscribeFromSnapshot = (async function () {
      const querySnapshot = await getDocs(collection(firestore, "collections"));
      const collections = convertCollectionsSnapshotToMap(querySnapshot);
      updateCollections(collections);
    })().then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Shop);
