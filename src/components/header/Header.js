import React from "react";
import Hero from "../hero/Hero";

const Header = () => {
  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img src="logo.png" alt="Netflix" />
          <a href="#" className="btn btn-rounded">
            Sign In
          </a>
        </div>
        <Hero />
      </header>
    </>
  );
};

export default Header;
