import React from 'react'
import Hero from './components/partsPage/Hero/Hero'
import About from './components/partsPage/About/About'
import Movies from './components/partsPage/Movies/Movies'
import Trailers from './components/partsPage/Trailers/Trailers'
import Footer from './components/partsPage/Footer/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Movies/>
    <Trailers/>
    <Footer/>
    </>
  )
}

export default Home