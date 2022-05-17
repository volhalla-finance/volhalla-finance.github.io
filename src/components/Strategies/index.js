import React from 'react';
import divider2 from './../../divider2.svg';
import bespoke from './asset-bespoke.jpg';
import standard from './asset-standard.jpg';
import ReactCardFlip from 'react-card-flip';
import { Button } from 'antd';
import { FaArrowRight } from 'react-icons/fa';
/*
* Strategies  section
*/
class Strategies extends React.Component {
  constructor() {
    super();
      this.state = {
      isCoreFlipped: false,
      isBespokeFlipped: false,
    };
    this.handleClickCore = this.handleClickCore.bind(this);
    this.handleClickBespoke = this.handleClickBespoke.bind(this);
  }

  handleClickCore(e) {
    e.preventDefault();
    this.setState(prevState => ({ isCoreFlipped: !prevState.isCoreFlipped }));
  }
  handleClickBespoke(e) {
    e.preventDefault();
    this.setState(prevState => ({ isBespokeFlipped: !prevState.isBespokeFlipped }))
  }

  render() {
    let title = "Every crypto portfolio is different.";
    let title2 = "We make complex strategies simple.";
    return <div className="strategies">
      <div className="section-container padded">
        <h3>{title}</h3>
        <h3>{title2}</h3>
        <div className="strategy-overview">
            <ReactCardFlip isFlipped={this.state.isCoreFlipped} flipDirection="horizontal">
              <div className="strategy" onClick={this.handleClickCore}>
                <div className="card-container">
                  <div className="asset-container">
                    <img src={standard}/>
                  </div>
                  <h3>CORE STRATEGIES</h3>
                </div>
              </div>
              <div className="strategy back" onClick={this.handleClickCore}>
                <div className="card-container">
                  <h3>Core Strategies</h3>
                  <body>Earn up to 60% APY on BTC, ETH, SOL, USDC, and other tokens.</body>
                  <body>Find the right solution for you based on your risk apptetite</body>
                  <div className="button-container">
                    <Button className="button" type="primary" size={24}>
                      <FaArrowRight size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          

          
            <ReactCardFlip isFlipped={this.state.isBespokeFlipped} flipDirection="horizontal">
              <div className="strategy" onClick={this.handleClickBespoke}>
                <div className="card-container">
                  <div className="asset-container">
                    <img src={bespoke}/>
                  </div>
                  <h3>BESPOKE STRATEGIES</h3>
                </div>
              </div>
              <div className="strategy back" onClick={this.handleClickBespoke}>
              <div className="card-container">
                  <h3>Bespoke Strategies</h3>
                  <body>Placeholder.</body>
                  <body>Find the right solution for you based on your risk apptetite</body>
                  <div className="button-container">
                    <Button className="button" type="primary" size={24}>
                      <FaArrowRight size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
      </div>
      <img src={divider2} className="divider"></img>
    </div>;
  }
}

export default Strategies;