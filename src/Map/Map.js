import React, { Component } from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
// import ReactMapGL, {Marker} from 'react-map-gl';

const TOKEN = 'pk.eyJ1Ijoia2lyYXJhZTIxIiwiYSI6ImNqdDRvOHhyNzAwZ2UzeXFzcDg3aTQxMHIifQ.43o72qI87GWeN3lw-tOfhg';

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
  };

  class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
          viewport: {
            latitude: 37.926868,
            longitude: -78.024902,
            zoom: 2.8,
            bearing: 0,
            pitch: 0,
            width: 500,
            height: 500,
          }
        };
      }
  render() {
    const {viewport} = this.state;
    return (
      <div>
          <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl/>
        </div>
      </MapGL>
        
            {/* <img src="https://theunitedstates.io/images/congress/225x275/W000804.jpg" alt="map of virginia congressional districts"/> */}
        
      </div>
    );
  }
}

export default Map;
