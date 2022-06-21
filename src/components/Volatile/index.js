import React, {createRef, useEffect} from 'react';
import divider1 from './../../divider1.svg';
import volatileVideo from './volatile.mp4';
import { Button } from 'antd';
/*
* Volatile  section
*/
export default function Volatile() {

  let subtitle = "Volhalla has strategies for everyone whether you are generating yield through options or diversifying your crypto portfolio.";

  const vRef = createRef();
  useEffect(() => {
    function playVideo() {
      vRef.current.currentTime = 0.034;
      vRef.current.play();
    }

    if (vRef && vRef.current) {
        vRef.current.addEventListener("ended", playVideo);
    }
  }, []);

  return <div className="intro">
    <div className="section-container padded">
      <div className="cta-container">
        <div className="cta">
          <h1>Crypto markets are volatile.</h1>
          <h1> Use that to your advantage with Volhalla.</h1>
          <p>{subtitle}</p>
          <div className="button-container">
            <Button className="button" type="primary">
              Start Earning
            </Button>
          </div>
        </div>
      </div>
      <div className="asset">
        <video 
          ref={vRef} 
          autoPlay="autoplay" 
          id="volatile" 
          loop muted 
          playsInline
          alt="asset"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source src={volatileVideo} type="video/mp4"/>
        </video>
      </div>
    </div>
    <img src={divider1} className="divider"></img>
  </div>;
}