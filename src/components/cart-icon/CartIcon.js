import React from "react";
import { ReactComponent as CartBagIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

export default function CartIcon(props) {
  return (
    <div className="cart-icon" onClick={props.onClick}>
      <CartBagIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
