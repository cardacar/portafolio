import React from 'react';
//Imports react fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
          <a className="navbar-brand ms" className="navbar-logo" href="#">
            CDQC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style= {{color: "#fff"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Sobre mi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Experiencia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contactame
                </a>
              </li>
            </ul>
          </div>

      </div>
    </nav>
  );
};

export default NavBar;
