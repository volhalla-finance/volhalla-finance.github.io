import React from 'react';
/*
* Strategies  section
*/
class Strategies extends React.Component {
  render() {
    let title = "Every crypto portfolio is different. We make complex strategies simple.";
    return <div className="strategies">
      <div className="section-container padded">
        <h2>{title}</h2>
        <div className="asset-container">
          <img src="http://placehold.jp/400x400.png"></img>
          <img src="http://placehold.jp/400x400.png"></img>
        </div>
      </div>
    </div>;
  }
}

export default Strategies;