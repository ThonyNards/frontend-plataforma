import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { Link } from "react-router-dom";

//  En este componente se manejan los estilos globales y la modificacion de componentes
//  ya existentes como el Link, que no permite la modificacion de sus estilos por medio del selector Link

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
}

button{
  background-color: #E0B01F;
  border: none;
  box-shadow: 0 1px 6px 0 #171717;

  width: 80px;
  height: 35px;

  border-radius: 50px;
}
input{
  border-radius: 50px;
  border-style:none;
  box-shadow: 0 1px 6px 0 #171717;
}

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  margin-right: 10px;
  color: white;
`;

export { GlobalStyles, StyledLink };
