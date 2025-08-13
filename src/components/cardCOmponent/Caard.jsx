import React from "react";
import "./Caard.css";
import MovieCard from "./MovieCard"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
function Caard({ movies, setGenre }) {
  const navigate= useNavigate();
  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(now.getDate() - 30);

  // Simple shuffle function (Fisher–Yates)
  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const movieCategories = {
    'Latest': shuffleArray(
      movies.filter((movie) => {
        const releaseDate = new Date(movie.release_date);
        return releaseDate >= thirtyDaysAgo && releaseDate <= now;
      })
    ),
    "Fan Favorite": shuffleArray(
      movies.filter(
        (movie) => movie.popularity > 200 && movie.vote_average <= 10
      )
    ),
    "Top Rated": shuffleArray(
      movies.filter((movie) => movie.vote_average > 7.1)
    ),
    "Action Movies": shuffleArray(
      movies.filter((movie) => movie.genre_ids?.includes(28))
    ),
    "Comedy Movies": shuffleArray(
      movies.filter((movie) => movie.genre_ids?.includes(35))
    ),
    "Horror Movies": shuffleArray(
      movies.filter((movie) => movie.genre_ids?.includes(27))
    ),
    "Romance Movies": shuffleArray(
      movies.filter((movie) => movie.genre_ids?.includes(10749))
    ),
  };

  const handleWatchlist = (movie) => {
    console.log(`Added "${movie.title}" to watchlist`);
  };
const handleShowmore = (categoryName, movies) => {
  console.log("Show more movies clicked:", categoryName);
  setGenre([categoryName, movies]);  // example: pass as tuple [categoryName, movies]
  navigate('/genres', { state: { genre: [categoryName, movies] } });
};


  return (
    <div className="movies-container">
      {Object.entries(movieCategories).map(([categoryName, categoryMovies]) => (
  <div key={categoryName} className="category-section">
    <h1 className="trends-title">{categoryName}</h1>
    <div className="trend-movies">
      {categoryMovies.length > 0 ? (
        categoryMovies.slice(0,8).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onWatchlist={handleWatchlist}
          />
        ))
      ) : (
        <p>No movies found in this category.</p>
      )}
      <button onClick={() => handleShowmore(categoryName, categoryMovies)}>Show More</button>
    </div>
  </div>
))}

    </div>
  );
}

export default Caard;


