import React, { Component } from 'react';
import './App.css';

class App extends Component {


  // componentDidMount() {
  //   axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', { headers: { 'X-API-Key': 'Kj3LA8ihrq1u54ZYNFmQ2eqG0Qa1a85K9y1xFIXl'}});

  // }

  render() {
    return (
      <div className="App">
        <nav >
               
               <h1 className= "header">Get To Know Who Represents You</h1>
               <h2>Virginia Representatives</h2>
            </nav>
          <main> </main>

            <footer className="footer"> 
               <li>Source: </li>
               <li>Created By: </li>
            </footer>
      </div>
    );
  }
}

export default App;
