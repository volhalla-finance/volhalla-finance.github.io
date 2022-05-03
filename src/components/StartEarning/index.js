import React from 'react';
import section3 from './../../section3.svg';
import section3_2 from './../../section3-2.svg';
/*
* Start earning  section
*/
class StartEarning extends React.Component {
  render() {
    let title = "Earn sustainable yield in every market with strategies right for you";

    return <div className="start-earning">
      <div className='section-container padded'>
        <img src={section3}></img>
        <div className="cta-container">
          <h3>{title}</h3>
          <div className="button-container">
            <div className="button">Start Earning</div>
          </div>
        </div>
      </div>
      <div className="section-container padded">
        <div className="cta-container">
          <h3>{title}</h3>
          <div className="button-container">
            <div className="button">Start Earning</div>
          </div>
        </div>
        <img src={section3_2} className="asset2"></img>
      </div>
    </div>;
  }
}

export default StartEarning;