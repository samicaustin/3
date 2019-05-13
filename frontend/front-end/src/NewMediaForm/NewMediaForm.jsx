import React, { Component } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(this.state);
    }

    render(){
        return(

            <div>

                <form onSubmit = {(e) => {
                    e.preventDefault();
                    e.target.reset();
                    this.setState({
                        approved: false,
                        title: '',
                        type: '',
                        creator: '',
                        description: '',
                        imageUrl: ''
                    })
                    this.props.handleSubmit(this.state);

                }}>
                    Title: <input type="text" name="title" onChange = {this.handleChange}/>
                    Type: <input type="text" name="type" onChange = {this.handleChange}/>
                    Creator: <input type="text" name="creator" onChange = {this.handleChange}/>
                    Description: <input type="text" name="description" onChange = {this.handleChange}/>
                    Image URL: <input type="text" name="imageUrl" onChange = {this.handleChange}/>

                    <input type = "submit" value="submit"></input>
                </form>

            </div>
        )       
    }
}

export default NewMediaForm;