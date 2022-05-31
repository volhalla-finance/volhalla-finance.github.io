import React from 'react';
import logo from './../../logo-180.png';
import volhalla from './../../volhalla.svg';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
/*
* Footer section
*/
class Footer extends React.Component {
  render() {
    const logoContainer = <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
        <img src={volhalla} className="logo-name" alt="volhalla" />
    </div>;
    const socials = <div className="socials">
      <div className='item'><FaDiscord size={20} /></div>
      <div className='item'><FaTwitter size={20} /></div>
    </div>
    return <div className="footer">
      <div className="row">      
        {logoContainer}
        <a className="item">Docs</a>
        <a className="item">App</a>
        {socials}
      </div>
      <div className='row'>
        <span className='copyright'>&#169; 2022 Volhalla</span>
      </div>
    </div>;
  }
}

export default Footer;