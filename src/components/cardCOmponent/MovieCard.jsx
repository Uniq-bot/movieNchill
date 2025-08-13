import React from 'react'
import './Caard.css'


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

export default MovieCard