import React, { useState } from "react";
import "./NavBar.css";

function NavBar({ select, setSelect, search, setSearch }) {
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
            <h1>movieNchill</h1>
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
                <i className="ri-login-box-line"></i>
                Login
              </h3>
            </div>
          </div>
        </nav>
        <div
        className="menus-container"
        style={{
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <div className="datas">
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
