 import React,{useState,useEffect} from 'react';
import { FunListmain } from '../component/ListMain';
import { FanPreloader } from '../component/Preloader';
import { FanSearch } from '../component/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function FanMain (){
  const [films,setFilms] = useState([]);
  const [loading,setLoading] = useState(true);


  function searchMovies(str, type = 'all') {
    setLoading(true);
    //&type=${type} & скрепление гет параметров
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data)=>{setFilms( data.Search);setLoading(false);})
   // .catch((err)=>{console.error(err); setLoading(false); });
   }

 useEffect(()=>{
   fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
     .then(response => response.json())
     .then(data => {setFilms(data.Search);setLoading(false);})
  //.catch((err) => {console.error(err);setLoading(false); });
 },[]);


   return (
      <main className='container content'>
        <FanSearch
          searchFilm={searchMovies}
        />
        {loading ? <FanPreloader />
          : <FunListmain AppMovies={films} />
          /*AppList={this.state.film.Search}*/
        }
      </main>
    );
  
};
export default FanMain; 

 
