import React from "react";

import "./styles/Register_company.css";
import platformIcon from "../../resources/images/logoPlatform.png";
import userIcon from "../../resources/images/Icon_user.png";

class Register_user extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="register row">
            <div className="col-6">
              <div className="registerInfo">
                <h1>Registro como usuario</h1>
                <hr />
                <h2>Proceso de registro</h2>
                <p>
                  Despues de registrarte deberas esperar a ser admitido por el
                  administrador de tu grupo.
                </p>
                <div className="registerCompany__icon">
                  <img src={userIcon} alt="facebookIcon" />
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
                <h1>Registro</h1>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Confirmacion email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirmacion password" />
                <input type="text" placeholder="Numero de contacto" />
                <input
                  type="text"
                  placeholder="ID empresa a la que pertenece"
                />

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

export default Register_user;
