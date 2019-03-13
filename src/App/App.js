import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {  Route } from 'react-router-dom';
import House from '../House/House';
import Map from '../Map/Map'
import SenateList from '../Senate/SenateList';
// import Showone from '../Senate/Showone';
import Senate from '../Senate/Senate';


class App extends Component {
constructor(props){
  super(props);
  console.log("constructor")
  this.state = { 
    //array of 2 objects 
    senateData: [], 
    id:''
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
    // axios.get('https://api.propublica.org/congress/v1/members/senate/VA/current.json', { headers: { 'X-API-Key': 'Kj3LA8ihrq1u54ZYNFmQ2eqG0Qa1a85K9y1xFIXl'}})
    axios.get('https://project4-api-backend.herokuapp.com/senator')
    .then(json => {
      // console.log(json.data)
      this.setState({ senateData: json.data });
      // console.log(this.state.senateData)
    }).catch(
    )
    return (
      <div className="App">
             <nav > 
               <h1 className= "header">Get To Know Who Represents You</h1>
               <h2>Virginia Representatives</h2>
            </nav>

          <main> 
                  <Route exact path="/" render={() => <SenateList senate={this.state.senateData}/> } />
                  <Route exact path="/" render={() => <House house={this.state}/> } />
                  <Route exact path="/" render={() => <Map/> } />
                  <Route exact path="/senator/:id" render={(routerProps) => <Senate senate={this.state.senateData} {...routerProps} />} />

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
