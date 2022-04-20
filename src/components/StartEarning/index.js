import React from 'react';
/*
* Start earning  section
*/
class StartEarning extends React.Component {
  render() {
    let title = "Earn sustainable yield in every market with strategies right for you";

    return <div className="start-earning">
      <div className='section-container padded'>
        <img src="http://placehold.jp/400x300.png"></img>
        <div className="cta-container">
          <h2>{title}</h2>
          <div className="button-container">
            <div className="button">Start Earning</div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default StartEarning;