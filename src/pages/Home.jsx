import React, { useEffect, useState } from 'react'
import NavBar from '../components/Navbar/NavBar'
import Hero from '../components/Hero/Hero'
import Caard from '../components/cardCOmponent/Caard'
import Footer from '../components/Footer/Footer'
import { useNavigate } from 'react-router'
function Home({movies, user, isLoggedIn, setIsLoggedIn, setGenre}) {
  const navigate = useNavigate();
    const [select, setSelect]=useState('')
    const [search, setSearch]=useState('')
    // console.log(search);
    // console.log(select);
    useEffect(() => {
      if(!isLoggedIn) {
        navigate('/login'); // Redirect to login page if not logged in
      }
    }, [isLoggedIn, navigate]);

  return (
   <>
   <NavBar select={select} setSelect={setSelect} search={search} setSearch={setSearch} user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
   <Hero movies={movies}  />
   <Caard movies={movies} setGenre={setGenre} />




   <Footer />
   </>
  )
}

export default Home