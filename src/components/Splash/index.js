import React, {createRef, useEffect} from 'react';
import splash from './splash-video.mp4';
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
          <video 
            ref={vRef} 
            autoplay="autoplay"
            playsinline loop muted 
            alt="Splash" 
            className='module' 
            id="splash-video"
            poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          >
            <source src={splash} type="video/mp4"/>
          </video>
      </div>
  </div>;
}