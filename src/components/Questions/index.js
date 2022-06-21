import React from 'react';
import { Collapse } from 'antd';
import dividerTop from './divider-top.svg';
const { Panel } = Collapse;
/*
* Q&A  section
*/
class Questions extends React.Component {
  render() {
    let title = "More Questions?";
    return <div className="questions">
      <img src={dividerTop} className="divider"></img>
      <div className="section-container padded">
        <h2>{title}</h2>
        <div className="collapse">
          <Collapse bordered={false}>
            <Panel header="What does Volhalla do?" key="1">
              <p>Volhalla’s mission is to make sophisticated financial strategies in crypto more accessible. To achieve our mission, we provide smart contract driven crypto strategies that empower anyone to build sustainable investment portfolios. The strategies that we enable have historically only been available to large institutional investors who have access to sophisticated derivatives, hedging techniques, and advanced yield generation strategies.</p> 
              <p>In our first series of strategies, we allow users to generate sustainable yield on their crypto holdings. A core pillar of institutional portfolios is the ability to earn stable recurring income in all market conditions. Volhalla offers the same tools for sustainable income generation to all crypto investors through options strategies such as covered calls or our Optimized Strangle Yield (OSY).</p>
            </Panel>
            <Panel header="What makes Volhalla different from other defi option projects?" key="2">
              <p>Our team could not find the trading strategies that we wanted on other defi options platforms, so we decided to build them ourselves. Given the many ways options can be structured and traded, we have constructed new strategies to maximize users' risk-reward. We want to introduce these in a transparent and easily understandable way so that every user understands the risk.</p>
            </Panel>
            <Panel header="What risks are there from Volhalla?" key="3">
              <p>Volhalla’s goal is to explain risk in a transparent way. There will always be risks from investing in a defi protocol, including market risk and smart contract risk. Volhalla partners with leading defi protocols such as Zeta Markets as well as institutional market markets to safeguard your funds. More on risks <a>here</a>.</p>
            </Panel>
            <Panel header="Where can I learn more?" key="4">
              <p>Please see <a>our docs</a> for more information. We're also available to answer your questions on our <a>Discord</a>.</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>;
  }
}

export default Questions;