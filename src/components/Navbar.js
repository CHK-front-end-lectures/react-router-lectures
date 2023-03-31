import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // style apo className
  return (
    <nav className="nav">
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'black' };
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
