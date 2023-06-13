import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";
function AuthLayout() {
  return (
    <div className="auth-container">
      <div id="content">
        <Outlet />
      </div>{" "}
      <div className="auth-menu">
        <Link to={"/auth"}>Giriş Yap</Link>
        <Link to={"/auth/register"}>Kayıt Ol</Link>
      </div>
    </div>
  );
}

export default AuthLayout;
