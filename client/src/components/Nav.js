import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        Shamanic Harmony
      </Link>
      <Link className='nav-link' to='#'>Shop</Link>
      <Link className='nav-link' to='#'>About</Link>
      <Link className='nav-link' to='#'>My Cart</Link>
    </nav>
  )
};

export default Nav;