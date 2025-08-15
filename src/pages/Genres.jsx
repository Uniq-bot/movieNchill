import React from 'react';
import '../pagesCss/Genres.css'; // Adjust the path as necessary
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/cardCOmponent/MovieCard';
function Genres({setWatchlist , select, setSelect, search, setSearch, user, isLoggedIn}) {
  const location = useLocation();
  const genre = location.state?.genre || ['No category', []];
  const [categoryTitle, movies] = genre;

  return (
    <>

    <div className="genres-container">
      <h1 className="genres-title">{categoryTitle}</h1>
      <div className="genres-list">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} setWatchlist={setWatchlist} />)
        ) : (
          <p>No movies found in this category.</p>
        )}
      </div>
    </div>
    </>
  );
}

export default Genres;
