import React from 'react';
import logo from './../../logo-180.png';
import {FaDiscord} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
/*
 * Footer section
 */
class Footer extends React.Component {
    render() {
        const logoContainer = <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
            <div className="logo-name">Volhalla</div>
        </div>;
        const socials = <div className="socials">
            <div className='item'><FaDiscord size={20}/></div>
            <div className='item'><FaTwitter size={20}/></div>
        </div>
        return <div className="footer">
            {logoContainer}
            <div className="item">Docs</div>
            <div className="item">App</div>
            {socials}
        </div>;
    }
}

export default Footer;