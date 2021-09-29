import React, { Component } from 'react';
import './App.css';
import SearchField from './SearchField'
import City from './City'

class App extends Component {
  state = {
    zips: [],
  }
  saveZips = (zips) => {
    this.setState({
      zips
    })
  }
  render() {
    const {zips} = this.state
    console.log("state: ", zips)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <SearchField saveZips = {(zips) => this.saveZips(zips)}/>
        <div>
        {zips.length === 0 
        ? (<div className="list-zips">No Results</div>) 
        : (<div className="list-zips">
            {zips.map((zip, idx) => (
              <ul>
                <li key={idx}>
                  <City zip={zip}/>
                </li>
              </ul>))}
          </div>)}
        </div>
      </div>
    );
  }
}

export default App;
