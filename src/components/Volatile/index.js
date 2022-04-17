import React from 'react';
/*
 * Volatile  section
 */
class Volatile extends React.Component {
  render() {
    let title = "Crypto markets are volatile. Use that to your advantage with Volhalla";
    let subtitle = "Volhalla has strategies for everyone whether you are generating yield through options or diversifying your crypto portfolio";
    return <div className="intro">
        <div className="cta-container">
            <h2>{title}</h2>
            <body>{subtitle}</body>
            <div className="button-container">
                <div className="button">Start Earning</div>
            </div>
        </div>
        <img src="http://placehold.jp/400x300.png"></img>
    </div>;
  }
}

export default Volatile;