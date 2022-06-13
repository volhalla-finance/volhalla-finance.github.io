import React, {createRef, useEffect} from 'react';
import logoAnimated from './logo-animated.mp4';
/*
 * Splash screen section
 */

export default function Splash() {
  const vRef = createRef();
  useEffect(() => {
    function playVideo() {
      // https://stackoverflow.com/questions/23295278/looping-html5-video-flashes-a-black-screen-on-loop
      vRef.current.currentTime = 0.034;
      vRef.current.play();
    }

    if (vRef && vRef.current) {
        vRef.current.addEventListener("ended", playVideo);
    }
  }, []);
  return <div className="splash padded">
    <div className="section-container">
      <div className="background">
        <div className="video-container">
          <video
              autoPlay="autoplay"
              playsInline loop muted 
              alt="Splash" 
            >
            <source src={logoAnimated} type="video/mp4"/>
          </video>
        </div>
 
        <div className="title-section" >
          {/* <div className="noselect"> 
            <h1>Diversified</h1>
            <h1>crypto yield</h1>
            <h1>strategies</h1>
            <h2>for all market conditions</h2>
          </div> */}
          <div id="first-layer" className="noselect" > 
            <h1>Diversified</h1>
            <h1>crypto yield</h1>
            <h1>strategies</h1>
            <h2>for all market conditions</h2>
          </div>
          <div id="second-layer" className="noselect"> 
            <h1>Diversified</h1>
            <h1>crypto yield</h1>
            <h1>strategies</h1>
            <h2>for all market conditions</h2>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="module">
        
        
      </div> */}
  </div>;
}