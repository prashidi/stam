import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <Link to="/application/add" className="btn btn-success btn-block">
        <i className="fas fa-plus" /> New
      </Link>
    </div>
  );
}