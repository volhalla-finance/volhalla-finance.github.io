import React from 'react';
import section2 from './../../section2.svg';
import divider2 from './../../divider2.svg';
import bespoke from './asset-bespoke.jpg';
import standard from './asset-standard.jpg';

/*
* Strategies  section
*/
class Strategies extends React.Component {
  render() {
    let title = "Every crypto portfolio is different.";
    let title2 = "We make complex strategies simple.";
    return <div className="strategies">
      <div className="section-container padded">
        <h3>{title}</h3>
        <h3>{title2}</h3>
        <div className="strategy-overview">
          <div className="strategy">
            <div className="asset-container">
              <img src={bespoke}/>
            </div>
            <h3>CORE STRATEGIES</h3>
          </div>
          <div className="strategy">
            <div className="asset-container">
              <img src={bespoke}/>
              
            </div>
            <h3>BESPOKE STRATEGIES</h3>
          </div>
        </div>
      </div>
      <img src={divider2} className="divider"></img>
    </div>;
  }
}

export default Strategies;