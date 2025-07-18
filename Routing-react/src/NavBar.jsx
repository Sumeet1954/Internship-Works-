import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary Hero-sec">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#"> <img src="/images/logo.png"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-bar-nav" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Taxes">Taxes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Accounting">Accounting</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
