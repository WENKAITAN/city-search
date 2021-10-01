import React, { Component} from "react"

class City extends Component {

    render() {
        return <div>
        <h3>{this.props.state[0].state}</h3>
        <ul style={{display: 'inline-block'}}>
          {this.props.state.map(state => 
            <li style={{border: 'solid 1px black'}}>
              <p>Zip: {state.Zipcode}</p>
              <p>City: {state.City}</p>
            </li>
          )}
        </ul>
      </div>

      
    
    }
}

export default City;

