import React from 'react';
import logo from './../../logo-180.png';
/*
 * Navbar for the home page
 */
class NavBar extends React.Component {
  render() {
    const logoContainer = <div className="logo-container">
      <img src={logo} className="logo" alt="logo" />
      <div className="logo-name">Volhalla</div>
    </div>;
    const navLinks = <div className="right-links">
      <div className="item"><a href="/" >Docs</a></div>
      <div className="item"><a href="/" >Community</a></div>
      <div className="item"><a href="/" >Launch App</a></div>
    </div>
    return <div class="nav">
      {logoContainer}
      {navLinks}
    </div>;
  }
}

export default NavBar;