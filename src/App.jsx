import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Genres from "./pages/Genres";
import WatchList from "./pages/WatchList";
import NavBar from "./components/Navbar/NavBar";
import FetchMovies from "./utils/API";
import MoviesDetail from './pages/MoviesDetail'
import Footer from '../src/components/Footer/Footer'
import "./App.css";

function App() {
  // States
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved ? JSON.parse(saved) : false;
  });

 const [user, setUser] = useState(() => {
  try {
    const savedUser = localStorage.getItem("user");
    return savedUser && savedUser !== "undefined"
      ? JSON.parse(savedUser)
      : "";
  } catch {
    return "";
  }
});


  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  const [genre, setGenre] = useState([]);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {

      localStorage.setItem("user", JSON.stringify(user));
    
  }, [user]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Fetch movies on mount
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
    <BrowserRouter>
      <AppWrapper
        select={select}
        setSelect={setSelect}
        search={search}
        setSearch={setSearch}
        movies={movies}
        user={user}
        setUser={setUser}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        watchlist={watchlist}
        setWatchlist={setWatchlist}
        genre={genre}
        setGenre={setGenre}
      />
    </BrowserRouter>
  );
}

function AppWrapper({
  select,
  setSelect,
  search,
  setSearch,
  movies,
  user,
  setUser,
  isLoggedIn,
  setIsLoggedIn,
  watchlist,
  setWatchlist,
  genre,
  setGenre
}) {
  const location = useLocation();
  const showNavbar = location.pathname !== "/login";

  return (
    <>
      {showNavbar && (
        <NavBar
          select={select}
          setSelect={setSelect}
          search={search}
          setSearch={setSearch}
          user={user}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      <Routes>
        <Route
          path="/login"
          element={<Login setLogin={setIsLoggedIn} setUser={setUser} user={user} />}
        />
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              user={user}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              genre={genre}
              setGenre={setGenre}
              setWatchlist={setWatchlist}
            />
          }
        />
        
        <Route
          path="/genres"
          element={
            <Genres
              setWatchlist={setWatchlist}
              user={user}
              isLoggedIn={isLoggedIn}
              select={select}
              setSelect={setSelect}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path="/watchlist"
          element={
            <WatchList
              watchlist={watchlist}
              user={user}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setWatchlist={setWatchlist}
            />
          }
        />
        <Route
  path="/movie/:id"
  element={
    <MoviesDetail
      setWatchlist={setWatchlist}
      user={user}
      isLoggedIn={isLoggedIn}
      movies={movies}
    />
  }
/>

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
   <Footer />

    </>
  );

}

export default App;
