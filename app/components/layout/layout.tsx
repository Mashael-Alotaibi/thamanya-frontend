import React from "react";
import Nav from "../nav/nav";
import Header from "../header/header";
import "./layout.css";
interface props {
  children: React.ReactNode;
}
const Layout = ({ children }: props) => {
  return (
    <div className="layout">
      <Nav />
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
