import React from 'react';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 13
};

class ScapeMap extends React.Component {
  componentDidMount() {
    // { window.googleAPIKey }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }


  render() {
    return (
      <div className="map-container" ref="map">
        <div className="gmap" ref={map => this.mapNode = map}></div>
      </div>
    )
  }
};

export default ScapeMap;