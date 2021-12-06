import React from "react";

import { StyledLink } from "../globalStyles";
import "./styles/SideBar.css";

class SideBar extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav__menu">
          <li>
            <StyledLink to="/profile">PERFIL</StyledLink>
          </li>
          <li>
            <StyledLink to="/skillset">HABILIDADES</StyledLink>
          </li>
          <li>
            <StyledLink to="/experience">EXPERIENCIAS</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">CONTACTO</StyledLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideBar;
