import React, { useState } from 'react'
import NavBar from '../components/Navbar/NavBar'
import Hero from '../components/Hero/Hero'
import Caard from '../components/cardCOmponent/Caard'
function Home({movies}) {
    const [select, setSelect]=useState('')
    const [search, setSearch]=useState('')
    // console.log(search);
    // console.log(select);

  return (
   <>
   <NavBar select={select} setSelect={setSelect} search={search} setSearch={setSearch} />
   <Hero movies={movies}  />
   <Caard movies={movies} />
   </>
  )
}

export default Home