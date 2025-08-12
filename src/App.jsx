import React, { use } from 'react'
import Home from './pages/Home'
import './App.css'
import FetchMovies from './utils/API' 
import {useEffect, useState} from 'react';
function App() {
  
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await FetchMovies();
        setMovies(movieData);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <Home movies={movies}/>
  )
}

export default App;