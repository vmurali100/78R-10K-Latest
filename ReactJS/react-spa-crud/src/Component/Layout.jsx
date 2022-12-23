import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h2>Welcome to CRUD Application</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
