import React, { useEffect, useState } from 'react'
import NavBar from '../components/Navbar/NavBar'
import Hero from '../components/Hero/Hero'
import Caard from '../components/cardCOmponent/Caard'
import { useNavigate } from 'react-router'
function Home({movies, setGenre, setWatchlist}) {
  const navigate = useNavigate();
   
    // console.log(search);
    // console.log(select);
 

  return (
   <>
   <Hero movies={movies}  />
   <Caard movies={movies} setGenre={setGenre} setWatchlist={setWatchlist} />




   </>
  )
}

export default Home