import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {  Route , Link, Switch } from 'react-router-dom';
import Senate from '../Senate/Senate';
import House from '../House/House';
import Map from '../Map/Map'


class App extends Component {
constructor(props){
  super(props);
  console.log("constructor")
  this.state = { 
    senateData: [], 
  }
}

  componentDidMount() {
  //   axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', { headers: { 'X-API-Key': 'Kj3LA8ihrq1u54ZYNFmQ2eqG0Qa1a85K9y1xFIXl'}})
  //   .then(json => {
  //     console.log(json.data.results[0].members[0])
  //     this.setState({ senateData: json.data.results[0].members[0] });
  //     console.log(this.state.senateData)

  // });
  }

  render() {
    axios.get('https://api.propublica.org/congress/v1/members/senate/VA/current.json', { headers: { 'X-API-Key': 'Kj3LA8ihrq1u54ZYNFmQ2eqG0Qa1a85K9y1xFIXl'}})
    .then(json => {
      // console.log(json.data.results)
      this.setState({ senateData: json.data.results });
      // console.log(senateData)
    }).catch(
    )
    return (
      <div className="App">
        <nav >
               
               <h1 className= "header">Get To Know Who Represents You</h1>
               <h2>Virginia Representatives</h2>
            </nav>
          <main> 
                  {/* <div>{this.state.senateData.first_name}</div> */}
                  <Route path="/" render={() => <Senate senate={this.state}/> } />
                  <Route path="/" render={() => <House house={this.state}/> } />
                  <Route path="/" render={() => <Map/> } />

          </main>

            <footer className="footer"> 
               <li>Source: </li>
               <li>Created By: </li>
            </footer>
      </div>
    );
  }
}

export default App;
