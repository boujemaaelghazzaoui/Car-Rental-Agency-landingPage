import React, { useEffect, useState } from 'react'
import Header from './Components/1-Header/Header'
import HeroSection from './Components/3-Main/1-HeroSection/HeroSection'
import About from './Components/3-Main/2-About/About'
import Reviews from './Components/3-Main/3-Reviews/Reviews'
import Cars from './Components/3-Main/4-Cars/Cars'
import BookingSection from './Components/3-Main/5-BookingSection/BookingSection'
import Contact from './Components/3-Main/6-Contact/Contact'
import Footer from './Components/3-Footer/Footer'
export default function Layout() {
  return (
    <>
        <Header />
        <main className='mt-13'>
            <HeroSection />
            <About />
            <Reviews />
            <Cars />
            <BookingSection />
            <Contact />
        </main>
        <Footer />
    </>
  )
}