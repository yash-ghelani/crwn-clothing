import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase";

import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";

import Cart from "../../components/cart/Cart";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { ReactComponent as Crown } from "../../assets/crown.svg";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.style.jsx'
import "./navigation.style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crown className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
          ) : (
            <NavLink to="/accounts">Sign In</NavLink>
          )}

          <Cart />
        </NavLinks>

        {cart && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
