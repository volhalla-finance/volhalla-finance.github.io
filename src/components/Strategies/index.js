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

    this.handleCoreMouseEnter = this.handleCoreMouseEnter.bind(this);
    this.handleCoreMouseLeave = this.handleCoreMouseLeave.bind(this);
    this.handleBespokeMouseEnter = this.handleBespokeMouseEnter.bind(this);
    this.handleBespokeMouseLeave = this.handleBespokeMouseLeave.bind(this);
  }

  handleCoreMouseEnter(e) {
    this.setState(prevState => ({isCoreFlipped: true}));
  }
  handleCoreMouseLeave(e) {
    this.setState(prevState => ({isCoreFlipped: false}));
  }

  handleBespokeMouseEnter(e) {
    this.setState(prevState => ({isBespokeFlipped: true}));
  }
  handleBespokeMouseLeave(e) {
    this.setState(prevState => ({isBespokeFlipped: false}));
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
              <div className="strategy" onMouseEnter={this.handleCoreMouseEnter}>
                <div className="card-container">
                  <div className="asset-container">
                    <img src={standard}/>
                  </div>
                  <h3>CORE STRATEGIES</h3>
                </div>
              </div>
              <div className="strategy back" onMouseLeave={this.handleCoreMouseLeave}>
                <div className="card-container">
                  <h3>Core Strategies</h3>
                  <p>Earn up to 60% APY on BTC, ETH, SOL, USDC, and other tokens.</p>
                  <p>Find the right solution for you based on your risk apptetite. </p>
                  <div className="button-container padded">
                    <Button className="button" type="primary" size={24}>
                      <FaArrowRight size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={this.state.isBespokeFlipped} flipDirection="horizontal">
              <div className="strategy" onMouseEnter={this.handleBespokeMouseEnter}>
                <div className="card-container">
                  <div className="asset-container">
                    <img src={bespoke}/>
                  </div>
                  <h3>BESPOKE STRATEGIES</h3>
                </div>
              </div>
              <div className="strategy back" onMouseLeave={this.handleBespokeMouseLeave}>
              <div className="card-container">
                  <h3>Bespoke Strategies</h3>
                  <p>We build bespoke strategies for large and complex portfolios.</p>
                  <p>Collaborations are welcomed. DM us on Twitter or Discord if you have specific needs for your portfolio.</p>
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