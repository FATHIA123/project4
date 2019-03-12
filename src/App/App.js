import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import Map from '../Map/Map'
import House from '../House/House'
import Senate from '../Senate/Senate'
import Member from '../Member/Member'
import { Route } from 'react-router-dom';


class App extends Component {
constructor(){
  super();
  this.state ={ 
    senateData: [],
  }
}

  componentDidMount() {
    axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', { headers: { 'X-API-Key': 'Kj3LA8ihrq1u54ZYNFmQ2eqG0Qa1a85K9y1xFIXl'}})
    .then(json => {
      console.log(json.data)
      this.setState({ senateData: json.data });

  });
  }

  render() {
    return (
      <div className="App">
        <nav >  
          <h1 className= "header">Get To Know Who Represents You</h1>
          <h2>Virginia Representatives</h2>
        </nav>

        <main> 
          <House />
          <Route exact path='/member' render={() => <Member /> } />
          <h2>Virginia Senators</h2>
          <Senate />
        </main>

        {/* <footer className="footer"> 
            <li>Source: </li>
            <li>Created By: </li>
        </footer> */}
      </div>
    );
  }
}

export default App;
