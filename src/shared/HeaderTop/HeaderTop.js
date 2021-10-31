import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-success header-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <FontAwesomeIcon className="me-2" icon={faEnvelope} />
                info@tourplannerbd.com
              </a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link active" href="/">
                <FontAwesomeIcon className="me-2" icon={faMobileAlt} />
                +88 01972 277 866
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTop;
