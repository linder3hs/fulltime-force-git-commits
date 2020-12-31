import React from "react";
import Menu from "./Menu";

function Layout(props) {
  return (
    <div>
      <Menu />
      {props.children}
    </div>
  );
}

export default Layout;
