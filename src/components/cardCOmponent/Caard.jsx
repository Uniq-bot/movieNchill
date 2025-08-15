import React, { useMemo } from "react";
import "./Caard.css";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

function Caard({ movies, setGenre, setWatchlist }) {
  const navigate = useNavigate();
  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(now.getDate() - 30);

  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // ✅ Only recompute when `movies` changes
  const movieCategories = useMemo(() => {
    return {
      Latest: shuffleArray(
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
      "Animation Movies": shuffleArray(
        movies.filter((movie) => movie.genre_ids?.includes(16))
      ),
    };
  }, [movies]); // only reshuffle when `movies` changes

  const handleShowmore = (categoryName, categoryMovies) => {
    setGenre([categoryName, categoryMovies]);
    navigate("/genres", { state: { genre: [categoryName, categoryMovies] } });
  };

  return (
    <div className="movies-container">
      {Object.entries(movieCategories).map(([categoryName, categoryMovies]) => (
        <div key={categoryName} className="category-section">
          <h1 className="trends-title">{categoryName}</h1>
          <div className="trend-movies">
            {categoryMovies.length > 0 ? (
              categoryMovies
                .slice(0, 8)
                .map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    setWatchlist={setWatchlist}
                  />
                ))
            ) : (
              <p>No movies found in this category.</p>
            )}
            <button
              id="show-more-button"
              onClick={() => handleShowmore(categoryName, categoryMovies)}
            >
              Show More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Caard;
