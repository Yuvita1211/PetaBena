import Container from "react-bootstrap/Container";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navigation = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container">
        <div className="header-container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1 className="text-light">
              <a href="index.html">
                <span>PetaBena</span>
              </a>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Beranda
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Data Bencana
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Peta Bencana
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#testimonials">
                  Infografis
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#"></a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* .navbar */}
        </div>
        {/* End Header Container */}
      </div>
    </header>
  );
};
export default Navigation;
