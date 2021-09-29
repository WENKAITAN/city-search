import React, { Component} from "react"

class City extends Component {
    componentDidMount(){
        console.log(this.props.zip)
        fetch(`http://ctp-zip-api.herokuapp.com/zip/${this.props.zip}`)
        .then(res => res.json())
        .then(cities => {
            JSON.stringify(cities)
            console.log(cities)
        })
    }
    render() {
        return(
            <div>
                hello world
            </div>
        )
    }
}

export default City;

