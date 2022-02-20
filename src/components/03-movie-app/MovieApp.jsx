import { MovieCard } from './movies/MovieCard';
import { NavbarMovies } from './iu/NavbarMovies';
import { useState, useEffect } from 'react';


export const MovieApp = () => {

  const [json, setJson] = useState({})
  const [moviesCard, setMoviesCard] = useState([])

  const getData = () => {
    fetch('Movies.json'
    ,{
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then( async function(response) {
         const resp = await response.json();
         setJson(resp)
         setMoviesCard(resp.results.map( ( movie ) => {
           return <MovieCard  key={movie.title}  movie={movie} imagePath={`${resp.images_url}${movie.poster_path}`} genres={resp.genres} />
         }));
         
      });
  }
  
  const handleSearch = (txt) => {
      setMoviesCard( json.results.filter( movie => movie.title.toLowerCase().match(txt.toLowerCase())).map( ( movie ) => {
        return <MovieCard  key={movie.title}  movie={movie} imagePath={`${json.images_url}${movie.poster_path}`}  genres={json.genres} />
      } ))
  }

    useEffect(() => {
      getData();
    }, [])

    return (
        <div>
          <NavbarMovies handleSearch={handleSearch}/>

          <div className="row">
              {moviesCard}
          </div>
          {
            moviesCard.length == 0 && 
            <p>Movie not found</p>

          }
        </div>
    )
}
