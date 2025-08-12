import React from "react";
import "./Caard.css";

function Caard({ movies }) {
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
    Latest: shuffleArray(
      movies.filter((movie) => {
        const releaseDate = new Date(movie.release_date);
        return releaseDate >= thirtyDaysAgo && releaseDate <= now;
      })
    ),
    "Fan Favorite": shuffleArray(
      movies.filter(
        (movie) => movie.popularity > 300 && movie.vote_average <= 7.1
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

  return (
    <div className="movies-container">
      {Object.entries(movieCategories).map(([categoryName, categoryMovies]) => (
        <div key={categoryName} className="category-section">
          <h1 className="trends-title">{categoryName}</h1>
          <div className="trend-movies">
            {categoryMovies.length > 0 ? (
              categoryMovies.map((movie) => (
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
