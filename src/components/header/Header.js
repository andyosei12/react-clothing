import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/CartIcon";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.styles.scss";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { toggleCartDropDown } from "../../redux/cart/cart-actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

const Header = ({ currentUser, showCart, toggleCartDropDown }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink className="option" to="/shop">
          shop
        </NavLink>
        <NavLink className="option" to="/shop">
          contact
        </NavLink>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <NavLink to="/signin" className="option">
            Sign in
          </NavLink>
        )}
        <CartIcon onClick={toggleCartDropDown} />
      </div>
      {showCart && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    showCart: selectCartHidden,
  });

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartDropDown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
