import React from 'react';

class SearchField extends React.Component {

    handleInput = (zipName) => {
        zipName = zipName.toUpperCase();
        console.log(zipName)
        var re = /^[A-Za-z]+$/;
        if(re.test(zipName)){
            fetch(`http://ctp-zip-api.herokuapp.com/city/${zipName}`)
            .then(response => response.json())
            .then(zips => {
                    this.props.saveZips(zips)
            })
        }


    }
    render(){
        return(
            <form className="zip-search-field">
                <label>
                    zip Name:
                    <input 
                        type="text" 
                        onChange={(event) => this.handleInput(event.target.value)}
                        placeholder="Try springfield"
                    />
                </label>
            </form>
        )
    }
}

export default SearchField;