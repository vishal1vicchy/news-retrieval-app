import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/another-action">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true" to="#">Disabled</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"white"}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?"dark":"light"} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "vishal",
  aboutText: "useful"
}

export default Navbar;
