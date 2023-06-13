import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import "./styles.css";
function DashboardLayout() {
  return (
    <div>
      <Header />

      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
