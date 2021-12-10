import React from "react";

import "./styles/Register_company.css";
import platformIcon from "../../resources/images/logoPlatform.png";
import buildingIcon from "../../resources/images/Icon_building.png";

class Register_company extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="register row">
            <div className="col-6">
              <div className="info">
                <h1>Registro como empresa</h1>
                <hr />
                <h2>Proceso de registro</h2>
                <p>
                  Al terminar el registro debera esperar a que la cuenta sea
                  activada.
                </p>
                <div className="socialMedia">
                  <img src={buildingIcon} alt="facebookIcon" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="login__form">
                <div className="login__logoContainer">
                  <img
                    className="login__platfomLogo"
                    src={platformIcon}
                    alt="platformIcon"
                  />
                </div>
                <h1>Login</h1>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Confirmacion email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirmacion password" />
                <input type="text" placeholder="Numero de contacto" />
                <input type="text" placeholder="Nombre empresa" />

                <div className="row">
                  <button className="form__button--login">Ingresar</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Register_company;
