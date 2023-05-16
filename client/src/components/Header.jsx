import React from "react";
import logo from "./assets/logo.png";
function Header() {
  return (
    <>
      <nav className="navbar bg-light mb-4 p-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            <div className="d-flex">
              <img alt="" src={logo} className="d-flex" />
              <div> Project GraphQL</div>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
