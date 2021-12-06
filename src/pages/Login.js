import React from "react";
import { StyledLink } from "../globalStyles";

import "./styles/Login.css";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="login row">
            <div className="col-6">
              <div className="info">
                <h2>¡Bienvenido!</h2>
                <p>
                  Estamos en constante mejora siguenos para enterarte de
                  nuestras actualizaciones
                </p>
                <div className="socialMedia"></div>
              </div>
            </div>
            <div className="col-6">
              <div className="login__form">
                <img src="" alt="" />
                <h1>Login</h1>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button>Ingresar</button>
                <StyledLink to="">Registrarse</StyledLink>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login;
