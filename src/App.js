import React, { Component } from 'react';
import './App.css';
import SearchField from './SearchField'
import City from './City'

class App extends Component {
  state = {
    zips: [],
    groupStates:{}
  }
  saveZips = (zips) => {
    this.setState({
      zips
    })
    this.getStates()
  }

  getStates = () => {
    Promise.all(this.state.zips.map(zip => new Promise((resolve, reject) => {
      fetch(`http://ctp-zip-api.herokuapp.com/zip/${zip}`)
      .then(response => response.json())
      .then(citiesInfo => {
        citiesInfo.map(city => {
          let stateCopy = {...this.state}
          stateCopy.groupStates[city.State] ? 
            stateCopy.groupStates[city.State].push(city) :
            stateCopy.groupStates[city.State] = [city];
          this.setState(stateCopy)
          return resolve()
        })
      })
    }))).then(() => {}).catch(()=> alert('An error Occured'))
  }
  render() {
    const {zips, groupStates} = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <SearchField saveZips = {(zips) => this.saveZips(zips)}/>
        <div>
        <div className="row">
          <div className="column">
          {zips.length === 0 
          ? (<div className="list-zips">No Results</div>) 
          : (<div className="list-zips">
              {zips.map((zip, idx) => (
                <ul>
                  <li key={idx}>
                    <p>{zip}</p>
                  </li>
                </ul>))}
            </div>)}
          </div>
          <div className="column">
            {Object.keys(groupStates).map(key => {
            return <City state={groupStates[key]}/>
            })}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
