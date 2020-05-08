import "./App.css";
import "./utils.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import NavTabs from "./nav-tabs/NavTabs";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavTabs />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
