import React, { Component } from 'react';
import ReactMapGL, {NavigationControl} from 'react-map-gl';
// import ReactMapGL, {Marker} from 'react-map-gl';
import './Map.css'


const TOKEN = 'pk.eyJ1Ijoia2lyYXJhZTIxIiwiYSI6ImNqdDRvOHhyNzAwZ2UzeXFzcDg3aTQxMHIifQ.43o72qI87GWeN3lw-tOfhg';

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px',
  };

  class Map extends Component {
   
        state = {
          viewport: {
            latitude: 37.7680,
            longitude: -78.2057,
            zoom: 5.5,
            bearing: 0,
            pitch: 0,
            width: 900,
            height: 500,
          }
        };
      
  render() {
    return (
      <div className="map" >
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapStyle="mapbox://styles/kirarae21/cjt6i1iy61p3h1flclmmg7wvk"
            mapboxApiAccessToken={TOKEN}>
            <div className="nav" style={navStyle}> 
              <NavigationControl/>
            </div>
        </ReactMapGL>
        
          
        
      </div>
    );
  }
}

export default Map;
