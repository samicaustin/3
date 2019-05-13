import React, { Component } from 'react';
import '../App.css';
import NewMediaForm from '../NewMediaForm/NewMediaForm';
import SearchForm from '../SearchForm/SearchForm';
import MediaIndex from '../MediaIndex/MediaIndex';


class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        news: []
      }
    }

componentDidMount = () => {
      this.fetchNews();
    }

    fetchNews = async () => {
      var url = 'https://newsapi.org/v2/everything?' +
          'q=gay&' +
          'from=2019-05-13&' +
          'sortBy=popularity&' +
          'apiKey=64c3c945a2f24a298dfbfb57e9fd47a9';
      var req = new Request(url);
      const todaysNews = await fetch(req);
      const todaysNewsParsed = await todaysNews.json();
      this.setState({
        news: todaysNewsParsed.articles
      })
    }
   
    

    showTodaysNews = () => {
      return this.state.news.map((article) => 
        <div>
           <p>{article.title}</p>
        </div>
      )
    }

  render(){
    const show = this.showTodaysNews();
    return (
      <div className="App">
  
          <h1>What's Gay Today:</h1>

          {show}

          <p>Queer Rex is a carefully-curated selection of the best queer media available today,
            recommeneded by people who crave representation just as much as you do. Type in a search
            word below to find your new favorite book, poem, or movie.</p>
  
          <hr></hr>
  
          <SearchForm/>
  
          <hr></hr>
  
          <p>Do you have some excellent queer content to reccommend? 
          Contribute to the collection by filling out the form below</p> 
  
          <NewMediaForm/>
  
          <hr></hr>
  
          <MediaIndex/>
  
  
      </div>
    )
  }
}

export default Home;
