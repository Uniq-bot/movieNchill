import React, { useState } from "react";
import "../pagesCss/watchlist.css"; // Adjust the path as necessary
function WatchList({
  watchlist,
  user,
  isLoggedIn,
  select,
  setSelect,
  search,
  setSearch,
  setWatchlist,
}) {
  const [isWatched, setIsWatched] = useState(false);
  console.log("watchlist here:", watchlist);
  const handleMovieDetail=(movie)=>{
      console.log(movie.title);
  }
  return (
    <>
      <div className="coustumize-watchlist"></div>
      <div className="watch-list-container">
        <h1>Your Recent Watchlist</h1>
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div key={movie.id} className={`watchlist-item ${movie.watched ? "watched" : ""}`} onClick={()=>{handleMovieDetail(movie)}}>
              <div className="movie-info">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h2>{movie.title}</h2>
                <p>Rating: {movie.vote_average.toFixed(1)} / 10</p>
              </div>
              <div className="movie-actions">
                <button
                  className="markWatchedBtn"
                  onClick={() => {
                    const updatedList = watchlist.map((item) =>
                      item.id === movie.id
                        ? { ...item, watched: !item.watched }
                        : item
                    );
                    setWatchlist(updatedList);
                    console.log(updatedList);
                    if(movie.watched) {
                      setIsWatched(true)
                    }
                  }}
                >
                  {movie.watched ? "Watched" : "Mark as Watched"}
                </button>

                <button
                  className="removeBtn"
                  onClick={() => {
                    const updatedWatchlist = watchlist.filter(
                      (item) => item.id !== movie.id
                    );
                    setWatchlist(updatedWatchlist);
                  }}
                >
                  Remove from watchList
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your watchlist is empty.</p>
        )}
      </div>
    </>
  );
}

export default WatchList;
