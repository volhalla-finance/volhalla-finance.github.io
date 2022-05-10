import React from 'react';
import hero from './../../hero.svg';
/*
 * Splash screen section
 */
class Splash extends React.Component {
  render() {
    return <div className="splash padded">
        <div className="section-container">
            <img src={hero} alt="Splash" className='module' />
        </div>
    </div>;
  }
}

export default Splash;