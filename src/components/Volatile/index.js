import React from 'react';
import divider1 from './../../divider1.svg';
import volatileVideo from './volatile.mp4';
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
          <div className="cta">
            <h1>{title}</h1>
            <body>{subtitle}</body>
            <div className="button-container">
              <Button className="button" type="primary">
                Start Earning
              </Button>
            </div>
          </div>
        </div>
        <div className="asset">
          <video autoplay="autoplay" playsinline alt="asset">
            <source src={volatileVideo} type="video/mp4"/>
          </video>
        </div>
      </div>
      <img src={divider1} className="divider"></img>
    </div>;
  }
}

export default Volatile;