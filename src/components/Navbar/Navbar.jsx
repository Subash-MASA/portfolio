import React, { useState } from "react";
import Logo from "../../assets/team/team-3.jpg";

function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top ">
      <div class="container">
        <a class="navbar-brand logo fs-2" href="#nav">
          Subash<span>.</span>
        </a>
        <button class="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show" : ""
          } justify-content-end order-lg-1`}
          id="navbarNav"
        >
          <ul class="navbar-nav menu" id="now">
            <li class="nav-item">
              <a class="nav-link active px-2" onclick="change()" href="#nav">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-2" href="#about" onclick="change()">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-2" href="#projects" onclick="change()">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-2" href="#workexp" onclick="change()">
                Work Exprience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-2 pe-4" href="#contact" onclick="change()">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-logo" href="#nav">
                <img src={Logo} alt="navlogo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CollapsibleExample;
