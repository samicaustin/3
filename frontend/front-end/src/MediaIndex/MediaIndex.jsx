import React, { Component } from 'react';
import NewMediaForm from '../NewMediaForm/NewMediaForm'
import '../App.css';


// MEDIA INDEX COMPONENT
// Fetches media from backend and displays it
// Needs to have search/filter capability at some point too
// Where the ROUTES will live

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

    getAllMedia = async () => {
        try {
            const response = await fetch(`http://localhost:3000/media`);

            if (response.status !== 200){
                // http errors need the below
                throw Error(response.statusText);
            }

            const mediaJSON = await response.json();
           
            this.setState({
                media: mediaJSON.data
            });
            
        } catch(err) {
            console.log(err)
        }
    };

    handleSubmit = async (formData) => {
        console.log(2,JSON.stringify(formData));
        const newMedia = await fetch('http://localhost:3000/media', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const parsedResponse = await newMedia.json();
        if (newMedia.status === 200){
            this.setState({
                media: [...this.state.media, parsedResponse]
            })
        }
        console.log(this.state.media);
    }



    render(){
        const mediaList = this.state.media.map((item) => {
                return (<li key={item._id}>
                <a href="#">{item.title} </a><br></br>
                by {item.creator}
                
                
                </li>)
            }
            )
        
        return (
            <div className="App">

              <h1>Recommendations for You:</h1>

                    <ul>
                        {mediaList}
                    </ul>

                    <hr></hr>
  
                    <p>Do you have some excellent queer content to reccommend? 
                    Contribute to the collection by filling out the form below</p> 

                    <NewMediaForm handleSubmit = {this.handleSubmit}/>

            </div>
          );
    }
}

export default MediaIndex;
