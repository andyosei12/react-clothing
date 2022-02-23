import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/CollectionPreview";
import "./CollectionOverview.styles.scss";

const CollectionOverview = ({ collections, match }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} path={match} {...otherProps} />
      ))}
    </div>
  );
};

export const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
