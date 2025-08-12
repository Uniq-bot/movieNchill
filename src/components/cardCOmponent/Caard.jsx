import React from "react";
import "./Caard.css";

function Caard({ movies }) {
   const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(now.getDate() - 30);


 const TrendMovies = movies.filter(movie => {
    const releaseDate = new Date(movie.release_date);
    return releaseDate >= thirtyDaysAgo && releaseDate <= now;
  });
  const fanFav = movies.filter(
    (movie) => movie.popularity > 300 && movie.vote_average <= 7.1
  );

  const handleWatchlist = (movie) => {
    console.log(`Added "${movie.title}" to watchlist`);
  };

  return (
    <div className="movies-container">
      <div className="trends">
        <h1 className="trends-title">Trending Now</h1>
      </div>
      <div className="trend-movies">
        {TrendMovies.map((movie) => (
          <TrendingCard
            key={movie.id}
            movie={movie}
            onWatchlist={handleWatchlist}
          />

        ))}
        <button>Showmore</button>
      </div>

      <div className="trends">
        <h1 className="trends-title">Fan Favorite</h1>
      </div>
      <div className="trend-movies">
        {fanFav.map((movie) => (
          <TrendingCard
            key={movie.id}
            movie={movie}
            onWatchlist={handleWatchlist}
          />
        ))}
        <button>Showmore</button>

      </div>
    </div>
  );
}

export default Caard;

const TrendingCard = ({ movie, onWatchlist }) => {
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
