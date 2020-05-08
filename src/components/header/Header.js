import React from "react";
import { Link } from "react-router-dom";
import Hero from "../hero/Hero";

const Header = () => {
  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img src="logo.png" alt="Netflix" />
          <Link to="#" className="btn btn-rounded">
            Sign In
          </Link>
        </div>
        <Hero />
      </header>
    </>
  );
};

export default Header;
