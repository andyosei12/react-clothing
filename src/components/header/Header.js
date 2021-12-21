import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/CartIcon";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.styles.scss";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { toggleCartDropDown } from "../../redux/cart/cart-actions";

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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  showCart: state.cart.cartDropdown,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartDropDown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
