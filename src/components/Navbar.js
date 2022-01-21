import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark">
        <div className="container">
          <div>
            <img
              src="./img/Morty.png"
              alt="Morty icon"
              className="d-inline-block align-text-top img-fluid" width="150"
            />
          </div>
          <a className="text-center me-0 title-page text-border text-decoration-none" href="/">
            Rick & Morty Universe
          </a>
          <div>
            <img
              src="./img/Rick2.png"
              alt="Rick icon"
              className="d-inline-block align-text-top img-fluid" width="150"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
