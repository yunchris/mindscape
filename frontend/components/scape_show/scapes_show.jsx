import React from 'react';

class ScapeShow extends React.Component {
  componentDidMount() {
    this.props.requestScape(this.props.match.params.scapeId);
  }

  render() {
    const { scape } = this.props;

    if (!this.props.scape) return null;

    return (
      <div>
        <div className="scapes-show-container">
          <div className="content-container">
            <div className="top-container">
              <div>HELLOOOO</div>
              <div>{scape.name}</div>
              <div>{scape.category}</div>
              <div>{scape.description}</div>
              <div>{scape.daily_price}</div>
              <div>{scape.creator_id}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScapeShow;