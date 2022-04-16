import React from 'react';
import placeholder from './../../placeholder.png';
/*
 * Splash screen section
 */
class Splash extends React.Component {
  render() {
    return <div className="splash">
        <img src={placeholder} alt="Splash" className='module'/>
    </div>;
  }
}

export default Splash;