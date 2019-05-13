import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../App.css';

class MediaIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            media: []
        }
    }

    componentDidMount = () => {
        this.getAllMedia();
    }

    async getAllMedia(){
        console.log(process.env.REACT_APP_BACKEND, 'this is the special var');
        const media = await fetch(`${process.env.REACT_APP_BACKEND}/media`);
        const mediaJSON = await media.json();
        console.log(mediaJSON);
        this.setState({
            media: mediaJSON
        })
    };







    render(){
        return (
            <div className="App">
              
              <h1>Recommendations for You:</h1>
        
        
            </div>
          );
    }
}

export default MediaIndex;
