import React from 'react';
import logo from './../NavBar/nav-logo.svg';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
/*
* Footer section
*/
class Footer extends React.Component {
  render() {
    const logoContainer = <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
    </div>;
    const socials = <div className="socials">
      <div className='item'><FaDiscord size={20} /></div>
      <a className='item' href="https://twitter.com/Volhalla_" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
    </div>
    return <div className="footer">
      <div className="row">      
        {logoContainer}
        {/* <a className="item">Docs</a>
        <a className="item">App</a> */}
        {socials}
      </div>
      <div className='row'>
        <span className='copyright'>&#169; 2022 Volhalla</span>
      </div>
    </div>;
  }
}

export default Footer;