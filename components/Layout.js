import React from "react";
import Navbar from "./Navbar";
import Overlay from "./Overlay";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Overlay />
      {props.children}
    </>
  );
};

export default Layout;
