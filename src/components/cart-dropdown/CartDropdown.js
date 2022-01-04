import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import CartItem from "../cart-items/CartItems";
import CustomButton from "../custom-button/CustomButton";

import "./CartDropdown.scss";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} items={item} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
