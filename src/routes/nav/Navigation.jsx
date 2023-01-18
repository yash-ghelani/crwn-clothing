import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase";

import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";

import Cart from "../../components/cart/Cart";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-link" to="/">
          <Crown className="logo" />
        </Link>

        <div className="links">
          <Link className="link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="link" to="/accounts">
              Sign In
            </Link>
          )}

          <Cart />
        </div>

        {cart && <CartDropdown />}
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
