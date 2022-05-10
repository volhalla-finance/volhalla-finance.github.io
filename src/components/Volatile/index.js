import React from 'react';
import section1 from './../../section1.svg';
import divider1 from './../../divider1.svg';
import { Button } from 'antd';
/*
* Volatile  section
*/
class Volatile extends React.Component {
  render() {
    let title = "Crypto markets are volatile. Use that to your advantage with Volhalla";
    let subtitle = "Volhalla has strategies for everyone whether you are generating yield through options or diversifying your crypto portfolio";
    return <div className="intro">
      <div className="section-container padded">
        <div className="cta-container">
          <h1>{title}</h1>
          <body>{subtitle}</body>
          <div className="button-container">
            <Button className="button" type="primary">
              Start Earning
            </Button>
          </div>
        </div>
        <img src={section1} className="asset" />
      </div>
      <img src={divider1} className="divider"></img>
    </div>;
  }
}

export default Volatile;