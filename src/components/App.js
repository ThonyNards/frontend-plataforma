import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Summary from "../pages/Summary";
import Login from "../pages/authentication/Login";
import RegisterMenu from "../pages/authentication/RegisterMenu";
import RegisterCompany from "../pages/authentication/Register_company";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/summary" element={<Summary />} />
          <Route exact path="/registerMenu" element={<RegisterMenu />} />
          <Route exact path="/registerCompany" element={<RegisterCompany />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
