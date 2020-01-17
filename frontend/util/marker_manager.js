class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(scapes) {
    const scapesObj = {};
    scapes.forEach(scape => scapesObj[scape.id] = scape);

    scapes
      .filter(scape => !this.markers[scape.id])
      .forEach(newScape => this.createMarkerFromScape(newScape, this.handleClick))

    Object.keys(this.markers)
      .filter(scapeId => !scapesObj[scapeId])
      .forEach((scapeId) => this.removeMarker(this.markers[scapeId]))
  }

  createMarkerFromScape(scape) {
    let image = { url: window.icon, scaledSize: new google.maps.Size(30, 30) }; 
    const position = new google.maps.LatLng(scape.lat, scape.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      scapeId: scape.id,
      icon: image 
    });

    marker.addListener('click', () => this.handleClick(scape));
    this.markers[marker.scapeId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.scapeId].setMap(null);
    delete this.markers[marker.scapeId];
  }
};

export default MarkerManager;