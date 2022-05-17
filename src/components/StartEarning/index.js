import React from 'react';
import vault0 from './vault0.svg';
import vault1 from './vault1.svg';
import vault2 from './vault2.svg';
import section3_2 from './../../section3-2.svg';
import dividerBottom from './divider-bottom.svg';
import { Button, Carousel } from 'antd';

/*
* Start earning  section
*/
class StartEarning extends React.Component {
  render() {
    let title = "Earn sustainable yield in every market with strategies right for you";
    const contentStyle = {
      height: '300px',
      background: '#FFFFFF',
      'box-shadow': 'inset 2px -2px 2px rgba(0, 0, 0, 0.1), inset -2px 2px 3px rgba(0, 0, 0, 0.1)',
      'border-radius': '10px',
    };
    return <div className="start-earning">
      <div className='section-container padded'>
        <Carousel className='carousel' autoplay>
          <div>
            <img style={contentStyle} src={vault0}></img>
          </div>
          <div>
            <img style={contentStyle} src={vault1}></img>
          </div>
          <div>
            <img style={contentStyle} src={vault2}></img>
          </div>
        </Carousel>
        <div className="cta-container">
          <h3>{title}</h3>
          <div className="button-container">
            <Button className="button" type="primary" size={24}>
              Start Earning
            </Button>
          </div>
        </div>
      </div>
      <div className="section-container padded">
        <div className="cta-container">
          <h3>Analytics to easily assess your performance and risk</h3>
          <div className="button-container">
            <Button className="button" type="primary" size={24}>
              Open Analytics
            </Button>
          </div>
        </div>
        <img src={section3_2} className="asset2"></img>
      </div>
      <img src={dividerBottom} className="divider"></img>
    </div>;
  }
}

export default StartEarning;