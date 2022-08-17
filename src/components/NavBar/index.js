import React, { setState } from 'react';
import logo from './nav-logo.svg';
import { Modal } from 'antd';
/*
 * Navbar for the home page
 */
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  showModal = () => {
    this.setState({isVisible: true});
  }
  hideModal = () => {
    this.setState({isVisible: false});
  }
  render() {
    const logoContainer = <div className="logo-container">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
    </div>;
    const navLinks = <div className="right-links">
      <div className="item"><a href="/" >Docs</a></div>
      <div className="item"><a href="/" >Community</a></div>
      <button className="item launch" onClick={this.showModal}><a>Get Updates</a></button>
      {/* <button className="item launch"><a href="/" >Start Earning</a></button> */}
    </div>
    return <nav className="nav padded sticky">
      {logoContainer}
      {navLinks}
      <Modal title="Stay updated" visible={this.state.isVisible} footer={null} onCancel={this.hideModal}>
        <p>Follow us on twitter at <a target="_blank" href="https://twitter.com/Volhalla_" rel="noreferrer">@Volhalla_</a></p>
        <p>Find us on medium at <a target="_blank" href="https://medium.com/@volhalla.finance" rel="noreferrer">@volhalla.finance</a></p>
        <p>For other inquiries, reach out to us at <a href = "mailto: info@volhalla.finance">info@volhalla.finance</a></p>
      </Modal>
    </nav>;
  }
}

export default NavBar;