import React, { memo, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import arrowLeft from "../../assets/images/arrow-left.svg";
import create from "../../assets/images/create.svg";
import manage from "../../assets/images/manage.svg";
import logout from "../../assets/images/logout.svg";
import menuImg from "../../assets/images/catolog-icon.svg";
import "../../sass/pages/admin.scss";

const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <main className="admin" id="admin">
      <div className={`admin__sidebar ${menu ? "active" : ""}`}>
        <button onClick={() => setMenu((p) => !p)} className="admin__open">
          <img src={menuImg} alt="admin menu image" className="admin__menu" />
        </button>
        <div className="admin__context">
          <Link to="/">
            <img src={arrowLeft} alt="back" className="admin__left" />
          </Link>
          <b className="admin__title">Admin Dashboard</b>
        </div>
        <NavLink
          className={`admin__link ${menu ? "active-link" : ""}`}
          to={"product-create"}
        >
          <img src={create} alt="create icon" className="admin__create" />
          <p className="admin__text">Create product</p>
        </NavLink>
        <NavLink
          className={`admin__link ${menu ? "active-link" : ""}`}
          to={"product-manage"}
        >
          <img src={manage} alt="manage" className="admin__manage" />
          <p className="admin__text">Manage product</p>
        </NavLink>
        <NavLink
          className={`admin__link ${menu ? "active-link" : ""}`}
          to={"category-create"}
        >
          <img src={create} alt="create icon" className="admin__create" />
          <p className="admin__text">Create category</p>
        </NavLink>
        <NavLink
          className={`admin__link ${menu ? "active-link" : ""}`}
          to={"category-manage"}
        >
          <img src={manage} alt="manage" className="admin__manage" />
          <p className="admin__text">Manage category</p>
        </NavLink>
        <Link
          onClick={() => localStorage.removeItem("token")}
          to="/login"
          className={`admin__logout ${menu ? "active" : ""}`}
        >
          <img className="admin__image" src={logout} alt="logout image" />
          <p className="admin__text">Log out</p>
        </Link>
      </div>
      <div className="admin__dashboard">
        <Outlet />
      </div>
    </main>
  );
};

export default memo(Admin);
