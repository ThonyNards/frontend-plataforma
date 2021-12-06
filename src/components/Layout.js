import React from "react";

import SideBar from "./SideBar";

function Layout(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <main>{props.children}</main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
