import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li>
          <a href="#/" onClick={() => navigate(-1)}>
            Geri
          </a>
        </li>
        <li>
          {" "}
          <Link to={"/"}>Anasayfa</Link>
        </li>
        <li>
          {" "}
          <Link to={"/about"}>Hakkımızda</Link>
        </li>
        <li>
          {" "}
          <Link to={"/users"}>Kullanıcılar</Link>
        </li>
        <li>
          {" "}
          <Link to={"/auth"}>Giriş Yap/Kayıt Ol</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
