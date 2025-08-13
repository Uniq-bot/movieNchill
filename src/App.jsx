import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import FetchMovies from './utils/API';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Genres from './pages/Genres';
function App() {
  const [movies, setMovies] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
const [genre, setGenre] = useState([]);
  const [user, setUser] = useState('');
console.log(genre);
  useEffect(() => {
     if(isLoggedIn){
    const fetchMovies = async () => {
      try {
        const movieData = await FetchMovies();
        setMovies(movieData);
        console.log(`Movies:`, movieData);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }
}, [isLoggedIn]);
  console.log(isLoggedIn);

  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setLogin={setIsLoggedIn} setUser={setUser} user={user} />} />
        <Route path="/" element={<Home movies={movies} user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} genre={genre} setGenre={setGenre} />} />
        <Route path='/genres' element={<Genres genre={genre} />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
