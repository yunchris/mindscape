import React from 'react';

import MarkerManager from '../../util/marker_manager';
import { withRouter} from 'react-router-dom';

const mapOptions = {
  center: { lat: 37.590106, lng: -122.229460},
  zoom: 9,
  disableDefaultUI: true,
  zoomControl: true
};

class ScapeMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = document.getElementById("map");
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singleScape) {
      this.props.fetchScape(this.props.scapeId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.scapes);
    }
  }

  componentDidUpdate() {
    if (this.props.singleScape) {
      const targetScapeKey = Object.keys(this.props.scapes)[0];
      const targetScape = this.props.scapes[targetScapeKey];
      this.MarkerManager.updateMarkers([targetScape]);
    } 
    else {
      this.MarkerManager.updateMarkers(this.props.scapes);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateBounds(bounds);
    });
  }

  handleMarkerClick(scape) {
    this.props.history.push(`${scape.id}`);
  }

  render() {
    return (
      <div className="map-container" ref="map">
        <div className="gmap" id="map"></div>
      </div>
    )
  }
};

export default withRouter(ScapeMap);