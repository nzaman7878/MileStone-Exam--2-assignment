import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

// Functional component for the website header
export const Header = () => {
  return (
    <div id="Header">
      {/* Website Title */}
      <h1>PWBlog</h1>

      {/* Navigation Links */}
      <nav>
        {/* NavLink for Home */}
        <NavLink to={"/"} activeClassName="active-link">
          <button>Home</button>
        </NavLink>

        {/* NavLink for Blogs */}
        <NavLink to={"/blogs"} activeClassName="active-link">
          <button>Blogs</button>
        </NavLink>

        {/* NavLink for Add Blog */}
        <NavLink to={"/addblog"} activeClassName="active-link">
          <button>Add Blog</button>
        </NavLink>
      </nav>
    </div>
  );
};
