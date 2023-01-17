import React from 'react'

import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/crown.svg'

import './navigation.scss'

const Navigation = () => {
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

          <Link className="link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navigation
