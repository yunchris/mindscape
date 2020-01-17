import React from 'react';

class ScapeShow extends React.Component {
  componentDidMount() {
    this.props.requestScape(this.props.scapeId);
  }

  render() {
    const { scape } = this.props;
    if (!this.props.scape) return null;

    return (
      <div className="scape-show-container">
        <div className="nav-background"></div>
        <div className="scape-carousel">
          <img src={scape.picture_url} />
        </div>
        {/* <div className="booking"></div> */}
        <div className="scape-details">
          <div className="scape-info">
            <div>HELLOOOO</div>
            <div>{scape.name}</div>
            <div>{scape.category}</div>
            <div>{scape.description}</div>
            <div>{scape.daily_price}</div>
            <div>{scape.creator.first_name}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScapeShow;