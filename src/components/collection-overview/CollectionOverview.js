import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/CollectionPreview";
import "./CollectionOverview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
});

export default connect(mapStateToProps)(CollectionOverview);
