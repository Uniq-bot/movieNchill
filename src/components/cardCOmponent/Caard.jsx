import React, { useState } from "react";
import "./Caard.css";

function Caard({ movies }) {
  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(now.getDate() - 30);

  // Prepare movie lists for each category once
  const movieCategories = {
    "Trending Now": movies.filter((movie) => {
      const releaseDate = new Date(movie.release_date);
      return releaseDate >= thirtyDaysAgo && releaseDate <= now;
    }),
    "Fan Favorite": movies.filter(
      (movie) => movie.popularity > 300 && movie.vote_average <= 7.1
    ),
    "Top Rated": movies.filter((movie) => movie.vote_average > 7.1),
    "Action Movies": movies.filter((movie) => movie.genre_ids?.includes(28)),
    "Comedy Movies": movies.filter((movie) => movie.genre_ids?.includes(35)),
    "Horror Movies": movies.filter((movie) => movie.genre_ids?.includes(27)),
    "Romance Movies": movies.filter((movie) => movie.genre_ids?.includes(10749)),
  };

  // State to keep track of selected category by name

  const handleWatchlist = (movie) => {
    console.log(`Added "${movie.title}" to watchlist`);
  };

  // Current list of movies based on selected type

  return (
   <div className="movies-container">
  {Object.entries(movieCategories).map(([categoryName, movies]) => (
    <div key={categoryName} className="category-section">
      {/* Title */}
      <h1 className="trends-title">{categoryName}</h1>

      {/* Movie Cards */}
      <div className="trend-movies">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onWatchlist={handleWatchlist}
            />
          ))
        ) : (
          <p>No movies found in this category.</p>
        )}
        <button>Show More</button>
      </div>
    </div>
  ))}
</div>

  );
}

export default Caard;

const MovieCard = ({ movie, onWatchlist }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="card-info">
        <h2 className="card-title">{movie.title}</h2>
        <div className="card-meta">
          ⭐ {movie.vote_average.toFixed(1)}/10{" "}
          <span className="card-review">({movie.vote_count} reviews)</span>
          <button onClick={() => onWatchlist(movie)}>WatchList</button>
        </div>
      </div>
    </div>
  );
};
