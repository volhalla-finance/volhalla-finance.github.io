import React from 'react';
import viking from './viking.svg';
import { Button } from 'antd';
/*
* Team section
*/
class Team extends React.Component {
  render() {
    let title = "Core Team";
    let subtitle = `The Volhalla team comes from backgrounds in blockchain engineering, 
    trading, and investing in traditional financial and crypto structured products. 
    We built Volhalla to help individuals and institutions access new ways of generating 
    sustainable yield and diversify their portfolios.`;
    let subtitle2 = `Reach out if you’re interested in what we’re building!`;
    return <div className="team">
      <div className="section-container padded">
        <div>
          <img src={viking}/>
        </div>
        <div className="container"> 
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <br/>
          <p>{subtitle2}</p>
          <div className="button-container">
            <Button className="button" type="primary" size={24}>
              Contact Us
            </Button>
          </div>
        </div>
       
      </div>
    </div>;
  }
}

export default Team;