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

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionNavLink,
} from "./Header.styles";

const Header = ({ currentUser, showCart, toggleCartDropDown }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionNavLink to="/shop">shop</OptionNavLink>
        <OptionNavLink to="/shop">contact</OptionNavLink>
        {currentUser ? (
          <OptionNavLink as="div" onClick={() => auth.signOut()}>
            Sign out
          </OptionNavLink>
        ) : (
          <OptionNavLink to="/signin">Sign in</OptionNavLink>
        )}
        <CartIcon onClick={toggleCartDropDown} />
      </OptionsContainer>
      {showCart && <CartDropdown />}
    </HeaderContainer>
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
