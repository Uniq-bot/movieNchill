import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png"; // Assuming you have a logo image
import { useNavigate } from "react-router-dom";
function NavBar({ select, setSelect, search, setSearch, user, isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuData = [
    {
      category: "Movies",
      icon: "🎞️", // optional emoji or icon name
      items: [
        "Release calendar",
        "Top 250 movies",
        "Most popular movies",
        "Browse movies by genre",
        "Top box office",
        "Showtimes & tickets",
        "Movie news",
        "India movie spotlight",
      ],
    },
    {
      category: "TV shows",
      icon: "🖥️",
      items: [
        "What's on TV & streaming",
        "Top 250 TV shows",
        "Most popular TV shows",
        "Browse TV shows by genre",
        "TV news",
      ],
    },
    {
      category: "Watch",
      icon: "📺",
      items: [
        "What to watch",
        "Latest trailers",
        "IMDb Originals",
        "IMDb Picks",
        "IMDb Spotlight",
        "Family entertainment guide",
        "IMDb Podcasts",
      ],
    },
  ];
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <div className="logo-ig">
              <img src={logo} alt="" className="logoo"/>
            </div>
            <div className="menu" onClick={toggleMenu}>
              <h3> menu</h3>
            </div>
          </div>
          <div className="searchbar">
            <select
              value={select}
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <option name="All" id="All">
                All
              </option>
              <option name="titles" id="titles">
                Titles
              </option>
              <option name="Tv" id="Tv">
                TV episodes
              </option>
              <option name="Trendings" id="Trendings">
                Trendings
              </option>
            </select>
            <input
              type="text"
              placeholder="Search your Desire HERE!!"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              // value={searched}
              // onchange={setSearched()}
            />
          </div>
          <div className="portal">
            <h3>
              <i className="ri-bookmark-line"></i>
              Watchlist
            </h3>
            <div className="auth">
              <h3>
                {
                  isLoggedIn ? (
                    <>
                    <span>Welcome, {user}</span> &nbsp;
                    <a href="/login"><i className="ri-logout-box-line" onClick={()=>{
                      setIsLoggedIn(false);
                      setUser('');
                    }} ></i></a>
                    </>
                  ) : (
                    <>
                    <i className="ri-login-box-line"></i>
                    <a href="/login">Login</a></>
                  )
                }
                {/* 
                Login */}
              </h3>
            </div>
          </div>
        </nav>
       <div
  className={`menus-container ${menuOpen ? "open" : ""}`}
>
  <div className="datas">
    <button onClick={()=>setMenuOpen(false)}><h1>X</h1></button>
    {menuData.map((data, index) => (
      <div key={index} className="menu-items">
        <h3>
          {data.icon} {data.category}
        </h3>
        <ul>
          {data.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

      </header>
    </div>
  );
}

export default NavBar;
