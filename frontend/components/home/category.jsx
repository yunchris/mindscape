import React from 'react';
import { withRouter } from 'react-router-dom'; 

class Category extends React.Component {
  constructor(props) {
    super(props); 
  }

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
              <a href="/#/scapes/scifi">
                <h2>Sci-Fi</h2>
                <p>WORLDS OF WHAT IF</p>
                <div className="pic"></div>
              </a>
            </div>

            <div className="divider"></div>

            <div className="card horror" >
              <a href="/#/scapes/horror">
                <h2>Horror</h2>
                <p>LIVE THE FEAR</p>
                <div className="pic"></div>
              </a>
            </div>

            <div className="divider"></div>

            <div className="card fantasy" >
              <a href="/#/scapes/fantasy">
                <h2>Fantasy</h2>
                <p>IMAGINED REALITIES</p>
                <div className="pic"></div>
              </a>
            </div>

          </div>  
        </div>

        <div className="content-container">
          <div className="container">
            <div className="card past">
              <a href="/#/scapes/past">
                <h2>Past</h2>
                <p>EXPLORE HISTORY</p>
                <div className="pic"></div>
              </a>
            </div>

            <div className="divider"></div>

            <div className="card present">
              <a href="/#/scapes/present">
                <h2>Present</h2>
                <p>TRAVEL & ADVENTURE</p>
                <div className="pic"></div>
              </a>
            </div>

            <div className="divider"></div>

            <div className="card romance">
              <a href="/#/scapes/romance">
                <h2>Romance</h2>
                <p>JOURNEY INTO MADNESS</p>
                <div className="pic"></div>
              </a>
            </div>
          </div>  
        </div>

      </div>
    );
  }
};

export default withRouter(Category); 