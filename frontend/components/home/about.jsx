import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="about-section">
        <div className="what">
          <img src={window.how} alt=""/>
          <div className="howItWorks-title">
            HOW IT WORKS
          </div>
        </div>
        
        <div className="howItWorks-copy">
            Welcome to the future. Mindscape uses magnetic resonance mapping to plug your consciousness into a networked
            virtual world. 
          <br/><br/>
            Step into our custom designed realities and live out your dreams from the comfort and safety of one of our
            luxury five star accommodations.
          <a href="/#/scapes/all"><div className="explorebutton">Explore</div></a>
        </div>
      </div>
    );
  }
};
