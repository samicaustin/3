import React, { Component } from 'react';

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

    getAllMedia = async () => {
        try {
            const response = await fetch(`http://localhost:3000/secret`);

            console.log(response);

            if (response.status !== 200){
                // http errors need the below
                throw Error(response.statusText);
            }

            const mediaJSON = await response.json();
           
            this.setState({
                media: mediaJSON.data
            });
            console.log(this.state.media, 'media state!!!!');

        } catch(err) {
            console.log(err)
        }
    };

    render(){
        const mediaList = this.state.media.map((item) => {
                return <div >{item.title}</div>
            }
            )
        
        return (
            <div className="App">
              
              <h1>Recommendations for You:</h1>
                    {mediaList}
            </div>
          );
    }
}

export default MediaIndex;
