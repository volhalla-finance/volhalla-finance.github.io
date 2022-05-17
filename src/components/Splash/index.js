import React from 'react';
import hero from './../../hero.svg';
import splash from './splash-video.mp4';
/*
 * Splash screen section
 */
class Splash extends React.Component {
  render() {
    return <div className="splash padded">
        <div className="section-container">
            <video autoplay="autoplay" playsinline alt="Splash" className='module'>
              <source src={splash} type="video/mp4"/>
            </video>
        </div>
    </div>;
  }
}

export default Splash;