import "./Header.styles.scss";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
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
      </div>
    </div>
  );
};
export default Header;
