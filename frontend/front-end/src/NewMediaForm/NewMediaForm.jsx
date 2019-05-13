import React, { Component } from 'react';
import '../App.css';

class NewMediaForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            approved: false,
            title: '',
            type: '',
            creator: '',
            description: '',
            imageUrl: '',
        }
    }

    handleChange = () => {

    }

    handleSubmit = () => {

    }

    render(){
        return(

            <div>

                <form onSubmit = {this.handleSubmit}>

                    Title: <input type="text" name="title"/>
                    Type: <input type="text" name="type"/>
                    Creator: <input type="text" name="creator"/>
                    Description: <input type="text" name="description"/>
                    Image URL: <input type="text" name="imageUrl"/>

                    <input type = "submit" value="submit"></input>
                    
                </form>

            </div>

        )
            
    }

}

export default NewMediaForm;