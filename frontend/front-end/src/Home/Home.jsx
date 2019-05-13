import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import NewMediaForm from '../NewMediaForm/NewMediaForm';
import SearchForm from '../SearchForm/SearchForm';
import MediaIndex from '../MediaIndex/MediaIndex';


function Home() {
  return (
    <div className="App">

        <p>Queer Rex is a carefully-curated selection of the best queer media available today,
          recommeneded by people who crave representation just as much as you do. Type in a search
          word below to find your new favorite book, poem, or movie.

        <hr></hr>

        <SearchForm/>

        <hr></hr>

        Do you have some excellent queer content to reccommend? 
        Contribute to the collection by filling out the form below</p> 

        <NewMediaForm/>

        <hr></hr>
        
        <MediaIndex/>


    </div>
  );
}

export default Home;
