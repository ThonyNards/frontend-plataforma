import React from "react";

import SideBar from "./SideBar";
import "./styles/Layout.css";

function Layout(props) {
  return (
    <React.Fragment>
      <div className="frame">
        <div className="background row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10">
            <main>{props.children}</main>
          </div>
        </div>

        {/* <main>{props.children}</main> */}
      </div>
    </React.Fragment>
  );
}

export default Layout;
