import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
