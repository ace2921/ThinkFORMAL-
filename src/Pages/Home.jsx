import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/Newsletter/Newsletter'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
