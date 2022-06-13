import React from 'react';
import logo from './nav-logo.svg';

/*
 * Navbar for the home page
 */
class NavBar extends React.Component {
  render() {
    const logoContainer = <div className="logo-container">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
    </div>;
    const navLinks = <div className="right-links">
      <div className="item"><a href="/" >Docs</a></div>
      <div className="item"><a href="/" >Community</a></div>
      <button className="item launch"><a href="/" >Start Earning</a></button>
    </div>
    return <nav className="nav padded sticky">
      {logoContainer}
      {navLinks}
    </nav>;
  }
}

export default NavBar;