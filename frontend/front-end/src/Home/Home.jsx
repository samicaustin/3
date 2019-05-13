import React, { Component } from 'react';
import '../App.css';
import SearchForm from '../SearchForm/SearchForm';
import MediaIndex from '../MediaIndex/MediaIndex';

// HOME COMPONENT:
// Displays gay news and acts as a launchpad for all other components.

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

    // Need to refine gay search and create a variable that subs in today's date into the request URL
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
           <p key={article._id}>{article.title}</p>
        </div>
      )
    }


   


  render(){
    const show = this.showTodaysNews();
    return (
      <div className="App">

          <p>Queer Rex is a carefully-curated selection of the best queer media available today,
            recommeneded by people who crave representation just as much as you do. Type in a search
            word below to find your new favorite book, poem, or movie.</p>
  
          <hr></hr>
  
          <SearchForm/>
  
          <hr></hr>
  
          <MediaIndex/>
  
          <h1>What's Gay Today:</h1>

          {show}
  
      </div>
    )
  }
}

export default Home;
