import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import React from "react";
const Navbar = (props) => {

    return(
<div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Anasayfa <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <Link to={"/about"} className="nav-link" >Hakkımızda</Link>
      </li>
      <li className="nav-item">
        <Link to={"/contact"} className="nav-link" >Bize Ulaşın</Link>
      </li>
    </ul>
  </div>
</nav>
</div>
    )
}

export default Navbar;
