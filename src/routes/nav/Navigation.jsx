import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user";

import "./navigation.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

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
            <span className="link" onClick={handleSignOut}>Sign Out</span>
          ) : (
            <Link className="link" to="/accounts">
              Sign In
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
