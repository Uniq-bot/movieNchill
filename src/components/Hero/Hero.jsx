import React, { useState, useEffect } from "react";
import "./hero.css";

function Hero({ movies }) {
  const [showInfo, setShowInfo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === movies.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 800); // animation duration in ms, matches CSS
    }, 10000); // 10 seconds visible before next slide

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies ? movies[currentIndex] : null;
  const nextIndex = movies ? (currentIndex === movies.length - 1 ? 0 : currentIndex + 1) : 0;
  const nextMovie = movies ? movies[nextIndex] : null;

  return (
    <div
      className="hero-container slide-in-next"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {/* Current image slides out when animating */}
      {currentMovie && (
        <div className={`slide ${isAnimating ? "slide-out" : ""}`}>
          <img
            key={currentMovie.id}
            src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
            alt={currentMovie.title || "Movie Poster"}
            className="hero-bg"
            loading="lazy"
          />
        </div>
      )}

      {/* Next image slides in only when animating */}
      {isAnimating && nextMovie && (
        <div className="slide ">
          <img
            key={nextMovie.id}
            src={`https://image.tmdb.org/t/p/original${nextMovie.backdrop_path}`}
            alt={nextMovie.title || "Movie Poster"}
            className="hero-bg"
            loading="lazy"
          />
        </div>
      )}

      {/* Info Overlay */}
      {currentMovie && (
        <div className={`hero-info ${showInfo ? "show" : ""}`}>
          <h1>{currentMovie.title}</h1>
          <p>
            {currentMovie.overview
              ? currentMovie.overview.slice(0, 100) + "..."
              : "No description available."}
          </p>
          <div className="movie-meta">
            ⭐ {currentMovie.vote_average.toFixed(1)}/10{" "}
            <span className="reviews">({currentMovie.vote_count} reviews)</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
