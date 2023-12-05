import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNavLayout from "./SideNavLayout";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex ">
        <SideNavLayout />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
