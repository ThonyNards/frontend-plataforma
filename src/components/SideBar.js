import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Link } from "react-router-dom";

import "./styles/SideBar.css";
import "react-pro-sidebar/dist/css/styles.css";
import platformIcon from "../resources/images/logoPlatform.png";
import userIcon from "../resources/images/Icon_user.png";
import notificationsIcon from "../resources/images/Icon_notification.svg";
import settingsIcon from "../resources/images/Icon_settings.svg";

class SideBar extends React.Component {
  render() {
    return (
      <nav>
        <section className="sideBar_logoContainer">
          <img
            className="sideBar__platfomLogo"
            src={platformIcon}
            alt="platformIcon"
          />
        </section>
        <section className="userInfo row">
          <div className="row row-cols-2">
            <div className="col">
              <img className="userLogo" src={userIcon} alt="userIcon" />
            </div>
            <div className="userInfo__details col">
              <p>user name</p>
              <p>user job</p>
            </div>
          </div>
          <div className="row">
            <img src={notificationsIcon} alt="notificationsIcon" />
            <img src={settingsIcon} alt="settingsIcon" />
          </div>
        </section>
        <section className="optionsList">
          <ProSidebar>
            <Menu iconShape="square">
              <MenuItem>
                Resumen
                <Link to="/summary" />
              </MenuItem>
              <SubMenu title="Dashboard">
                <Link to="/registerMenu" />
                <MenuItem>Inventario</MenuItem>
                <Link to="/" />
                <SubMenu title="Registro">
                  <MenuItem>Historial de productos</MenuItem>
                  <MenuItem>Historial de ventas</MenuItem>
                  <MenuItem>Historial de acciones</MenuItem>
                  <MenuItem>Historial de solicitados</MenuItem>
                </SubMenu>
                <MenuItem>Estadisticas</MenuItem>
              </SubMenu>
              <MenuItem>
                Usuarios
                <Link to="/" />
              </MenuItem>
            </Menu>
          </ProSidebar>
        </section>
      </nav>
    );
  }
}

export default SideBar;
