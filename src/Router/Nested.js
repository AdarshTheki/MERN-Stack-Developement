import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nested() {
  return (
    <div>
      <h1>This is Nested Components</h1>
      <Link className="nav-links" to=''>Blog</Link>
      <Link className="nav-links" to='industry'>industry</Link>
      <Link className="nav-links" to='company'>Company</Link>
      <Outlet />
    </div>
  );
}
