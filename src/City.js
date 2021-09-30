import React, { Component} from "react"

class City extends Component {
    state = {
        cities: []
    }
    componentDidMount(){
        console.log(this.props.zip)
        fetch(`http://ctp-zip-api.herokuapp.com/zip/${this.props.zip}`)
        .then(res => res.json())
        .then(cities => {
            JSON.stringify(cities)
            // console.log(cities[0])
            this.setState({cities})
        })
    }
    render() {
        console.log(this.state.cities)
        return(
            <div>
                {this.state.cities.map(city => (
                    <p>{city.State}</p>
                ))}
            </div>
        )
    }
}

export default City;

