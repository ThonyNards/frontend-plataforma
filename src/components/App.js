import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Login from "../pages/authentication/Login";
import RegisterMenu from "../pages/authentication/RegisterMenu";
import RegisterCompany from "../pages/authentication/Register_company";
import RegisterUser from "../pages/authentication/Register_user";
import Summary from "../pages/Summary";
import Inventory from "../pages/dashboard/InventoryContainer";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/registerMenu" element={<RegisterMenu />} />
          <Route exact path="/registerCompany" element={<RegisterCompany />} />
          <Route exact path="/registerUser" element={<RegisterUser />} />
          <Route exact path="/summary" element={<Summary />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Summary />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
