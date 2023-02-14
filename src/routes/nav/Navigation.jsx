import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase/firebase";
import { CartContext } from "../../contexts/cart";
import { selectCurrentUser } from "../../store/user/user-selector";

import Cart from "../../components/cart/Cart";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { ReactComponent as Crown } from "../../assets/crown.svg";
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.style.jsx'
import "./navigation.style";

const Navigation = () => {

  // const currentUser = useSelector(state => state.user.currentUser);
  const currentUser = useSelector(selectCurrentUser);
  const { cartToggle } = useContext(CartContext);

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

        {cartToggle && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
