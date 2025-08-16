import React, { useState } from 'react';
import './Caard.css';
import { useNavigate } from 'react-router';
const MovieCard = ({ movie, setWatchlist }) => {
  const [IsAdd, setIsAdd] = useState(false);
  const navigate=useNavigate()

  const handleWatchlist = () => {
    setWatchlist((prevWatchlist) => {
      if (!IsAdd) {
        // Add movie with watched flag
        return [...prevWatchlist, { ...movie, watched: false }];
      } else {
        // Remove movie
        return prevWatchlist.filter((item) => item.id !== movie.id);
      }
    });
    setIsAdd(!IsAdd);
  };
 const handleMovieDetail = (movie) => {
  navigate(`/movie/${movie.id}`, { state: { movie } });
};


  return (
    <div
      className="card"
      onClick={() => {
        // navigate only if not clicking the button
        handleMovieDetail(movie)
      }
    }
    key={movie.id}
    >
      <div className="card-image">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="card-info" >
        <h2 className="card-title">{movie.title}</h2>
        <div className="card-meta">
          ⭐ {movie.vote_average.toFixed(1)}/10{" "}
          <span className="card-review">({movie.vote_count} reviews)</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleWatchlist();
            }}
          >
            {IsAdd ? 'Added' : 'Add to WatchList'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
