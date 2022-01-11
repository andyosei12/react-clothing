import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartDropDown } from "../../redux/cart/cart-actions";
import CartItem from "../cart-items/CartItems";
import CustomButton from "../custom-button/CustomButton";

import "./CartDropdown.scss";

function CartDropdown({ cartItems, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} items={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton onClick={() => dispatch(toggleCartDropDown())}>
          Go to checkout
        </CustomButton>
      </Link>
    </div>
  );
}

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: selectCartItems,
  });

export default connect(mapStateToProps)(CartDropdown);
