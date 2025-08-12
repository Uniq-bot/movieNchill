import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import FetchMovies from './utils/API';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  const [movies, setMovies] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState('');

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
  console.log(isLoggedIn);

  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setLogin={setIsLoggedIn} setUser={setUser} user={user} />} />
        <Route path="/" element={<Home movies={movies} user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
