 import React from 'react';
import { FunListmain } from '../component/ListMain';
import { FanPreloader } from '../component/Preloader';
import { FanSearch } from '../component/Search';

 //const API_KEY = process.env.REACT_APP_API_KEY;

class FanMain extends React.Component {
  constructor() {
    super();
    this.state = {
      //film:{Search:[]}
      films:[],
       loading: true
    };
    this.searchMovies = this.searchMovies.bind(this)
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=27a5ebd5&s=matrix`)
      .then(response => response.json())
      .then(data => this.setState(
        {films:data.Search,loading:false }))
        .catch( (err)=>{console.error(err);
         this.setState({loading:false});
        });
  }

  searchMovies(str, type = 'all') {
    this.setState({loading:true});
    //&type=${type} & скрепление гет параметров
    fetch(`https://www.omdbapi.com/?apikey=27a5ebd5&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => {
       this.setState({films:data.Search, loading:false})
       .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
    });
  });
} 
  render() {
    const {films,loading} = this.state;
      return (
      <main className='container content'>
        <FanSearch 
        searchFilm = {this.searchMovies}
        />
        {loading ? <FanPreloader />
       : <FunListmain AppMovies={films} />
          /*AppList={this.state.film.Search}*/  
        }
      </main>
    );
  }
};
export default FanMain; 
