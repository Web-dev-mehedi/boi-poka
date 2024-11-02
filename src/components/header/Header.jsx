import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listed-books">Listed Books</NavLink>
            <NavLink to="/pages-to-read">Pages to Read</NavLink>
          </ul>
        </div>
        <Link to="/" className="text-3xl font-bold">Book Vibe</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex justify-between items-center gap-6 px-1 text-lg font-normal ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/listed-books">Listed Books</NavLink>
          <NavLink to="/pages-to-read">Pages to Read</NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-6">
            <Link to="/" className="btn btn-primary">Sign In</Link>
            <Link to="/" className=" btn btn-success">Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;
