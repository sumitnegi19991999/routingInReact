import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          margin: "10px",
          gap: "1em",
          display: "flex",
        }}
      >
        <Link to="/">Overview</Link>

        <Link to="/about">Electronic Health Record</Link>
        <Link to="/treatments">Treatments</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/bank">Bank</Link>
      </nav>
    </div>
  );
};

export default Navbar;
