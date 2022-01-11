import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as CartBagIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

import "./CartIcon.styles.scss";

function CartIcon({ onClick, itemCount }) {
  return (
    <div className="cart-icon" onClick={onClick}>
      <CartBagIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = () =>
  createStructuredSelector({
    itemCount: selectCartItemsCount,
  });

export default connect(mapStateToProps)(CartIcon);
