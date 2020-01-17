import React from 'react';
import { withRouter } from 'react-router-dom';

class ScapeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const scapeId = this.props.scape.id;
    this.props.history.push(`/scapes/${scapeId}`);
  }

  render () {
    const { name, category, daily_price , picture_url } = this.props.scape;
    return (
      <div className="scape-card-container">
        <div className="scape-card" onClick={this.handleClick}>
          <div><img src={picture_url}/></div>
          <div className="scape-card-title">{name}</div>
          <div className="line-break"></div>
          <div className="scape-card-deets">
            <div>{category}</div>
            <div className="scape-card-price">${daily_price}/day</div>
          </div>
         
        </div>
      </div>
    );
  }
 }

 export default withRouter (ScapeIndexItem);