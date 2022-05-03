import React from 'react';
import section2 from './../../section2.svg';
import divider2 from './../../divider2.svg';
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
        <div className="asset-container">
          <img src={section2}/>
        </div>
      </div>
      <img src={divider2} className="divider"></img>
    </div>;
  }
}

export default Strategies;