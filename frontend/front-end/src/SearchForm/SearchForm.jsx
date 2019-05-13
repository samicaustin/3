import React, { Component } from 'react';
import '../App.css';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
           search: e.currentTarget.value
        });
        console.log("handleChange");
    }

    render(){
        return(
            <div>
                <h3>Search, Search, Baby</h3>

                <form onSubmit = {(e) => {
                    e.preventDefault();
                    e.target.reset();
                    this.props.handleSearch(this.state);
                }}>
                    <input type="text" name="search" placeholder="try 'book'" onChange = {this.handleChange}/>
                    <input type="submit" onSubmit = {this.props.handleSearch}/>
                </form>

            </div>
        )
    }
}

export default SearchForm;