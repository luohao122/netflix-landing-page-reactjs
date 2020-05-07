import "./App.css";
import "./utils.css";
import React from "react";
import Header from "./header/Header";
import NavTabs from "./nav-tabs/NavTabs";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <NavTabs />
      <Footer />
    </div>
  );
};

export default App;
