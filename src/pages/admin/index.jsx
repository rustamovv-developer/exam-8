import React, { memo, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="admin" id="admin">
      <div className="admin__sidebar">
        <Link to={"category-create"}>create category</Link>
        <Link to={"category-manage"}>manage category</Link>
        <Link to={"product-create"}>create product</Link>
        <Link to={"product-manage"}>manage product</Link>
      </div>
      <div className="admin__dashboard">
        <Outlet />
      </div>
    </main>
  );
};

export default memo(Admin);
