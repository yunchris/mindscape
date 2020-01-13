import React from 'react';

export default class Category extends React.Component {
  render () {
    return (
      <div className="category-section">
        <div className="content-container">
          <div className="category-message">
            Explore worlds. Explore possibilities.
          </div>
        </div>

        <div className="content-container">
          <div className="container">
            <div className="card scifi">
              <h2>Sci-Fi</h2>
              <p>WORLDS OF WHAT IF</p>
              <div className="pic"></div>
            </div>

            <div className="divider"></div>

            <div className="card horror">
              <h2>Horror</h2>
              <p>LIVE THE FEAR</p>
              <div className="pic"></div>
            </div>

            <div className="divider"></div>

            <div className="card fantasy">
              <h2>Fantasy</h2>
              <p>IMAGINED REALITIES</p>
              <div className="pic"></div>
            </div>

          </div>  
        </div>

        <div className="content-container">
          <div className="container">
            <div className="card past">
              <h2>Past</h2>
              <p>EXPLORE HISTORY</p>
              <div className="pic"></div>
            </div>

            <div className="divider"></div>

            <div className="card present">
              <h2>Present</h2>
              <p>TRAVEL & ADVENTURE</p>
              <div className="pic"></div>
            </div>

            <div className="divider"></div>

            <div className="card romance">
              <h2>Romance</h2>
              <p>JOURNEY INTO MADNESS</p>
              <div className="pic"></div>
            </div>
          </div>  
        </div>


      </div>
    );
  }
};