import React, { Component } from 'react';
import '../App.css';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }



    render(){
        return(
            <div>
                <h3>Search, Search, Baby</h3>

                <form>
                    <input type="text" name="search" placeholder="try 'book'"/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}

export default SearchForm;