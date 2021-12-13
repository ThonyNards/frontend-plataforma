import React from "react";

import "./styles/RegisterMenu.css";
import BuildingIcon from "../../resources/images/Icon_building.png";
import UserIcon from "../../resources/images/Icon_user.png";

class RegisterMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="RegisterMenu">
            <div className="row">
              <h1>Selecciona el tipo de registro</h1>

              <div className="row registerOption">
                <img src={BuildingIcon} alt="BuildingIcon" />
                <h2>Empresa</h2>
              </div>
              <div className="row registerOption">
                <img src={UserIcon} alt="UserIcon" />
                <h2>Usuario</h2>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default RegisterMenu;
