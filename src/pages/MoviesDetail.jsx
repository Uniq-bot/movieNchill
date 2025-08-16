import React, { useEffect, useState } from 'react';
import '../pagesCss/movieDetail.css';
import { useLocation } from 'react-router';
import MovieCard from '../components/cardCOmponent/MovieCard';

function MoviesDetail({ movies, setWatchlist }) {
  const [RandomMovie, setRandomMovies] = useState([])

useEffect(() => {
  setRandomMovies([...movies].sort(() => 0.5 - Math.random()).slice(0, 8));
}, [movies]);
  
  const location = useLocation();
  const { movie } = location.state || {}; // get the main movie

  if (!movie) return <h2 style={{ color: 'white', textAlign: 'center' }}>Loading...</h2>;

  return (
    <>
      <div className='movieDetail'>
        <div 
          className="moviebackdrop"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
        />
        <div className="movieDetailcard">
          <img 
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title} 
            loading='lazy'
          />
          <div className="movieInfo">
            <h2>{movie.title}</h2>

            {/* Meta info */}
            <div className="movieMeta">
              <span className="rating">⭐ {movie.vote_average?.toFixed(1)}</span>
              <span className="release">📅 {movie.release_date}</span>
            </div>

            {/* Genres */}
            <div className="genres">
              {movie.genres?.map((genre) => (
                <span key={genre.id} className="genreBadge">{genre.name}</span>
              ))}
            </div>

            {/* Overview */}
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>

    <div className="otherMovies">
  <h1>Movies you may like</h1>
  <div className="trend-movies">
    {RandomMovie.map((moviee) => (
        <MovieCard key={moviee.id} movie={moviee} setWatchlist={setWatchlist} />
      ))}
  </div>
</div>

    </>
  );
}

export default MoviesDetail;
