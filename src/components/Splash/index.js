import React from 'react';
import splash from './../../splash.svg';
/*
 * Splash screen section
 */
class Splash extends React.Component {
  render() {
    return <div className="splash padded">
        <div className="section-container">
            <img src={splash} alt="Splash" className='module' />
        </div>
    </div>;
  }
}

export default Splash;