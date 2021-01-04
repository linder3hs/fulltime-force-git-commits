import React from "react";
import Menu from "./Menu";

function Layout(props) {
  return (
    <React.Fragment>
      <Menu />
      <div style={{ marginTop: 40 }}>{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;
