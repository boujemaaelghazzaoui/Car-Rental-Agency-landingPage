import React from 'react'
import ResponNav from './ResponNav'
import { Link } from 'react-scroll';


export default function Header() {
  
  return (
    <>
        <header className='fixed z-40 w-[100%] h-24  mt-[-7.5rem] md:mt-[-9rem] lg:mt-[-8.8rem] bg-transparent ' >
            <nav className='max-[900px]:hidden flex w-[93%] mb-24 border-2 bg-black rounded-full border-black items-center mx-auto py-1.5 justify-between px-8 shadow-xl ' >
              <a href='.' className=' flex  '>
                  <h1 className=" font-poetsen text-4xl text-white " >.</h1>
                  <h1 className=" font-poetsen text-4xl text-[#F2A819] ">AutoLibre</h1>
              </a>
              <ul className=' px-3 py-3 flex gap-5 text-white mix-blend-difference '>
                  <li id='nav-item' className=' cursor-pointer list-none font-medium text-lg py-[8px] px-[15px] '><Link to="accueil" spy={true} smooth = {true} duration={100} offset={-100}>Accueil</Link></li>
                  <li id='nav-item' className=' cursor-pointer list-none font-medium text-lg py-[8px] px-[15px] '><Link to="about" spy={true} smooth = {true} duration={100} offset={-100}>À Propos de Nous</Link></li>
                  <li id='nav-item' className=' cursor-pointer list-none font-medium text-lg py-[8px] px-[15px] '><Link to="reviews" spy={true} smooth = {true} duration={100} offset={-100}>Témoignages</Link></li>
                  <li id='nav-item' className=' cursor-pointer list-none font-medium text-lg py-[8px] px-[15px] '><Link to="cars" spy={true} smooth = {true} duration={100} offset={-100}>Voitures</Link></li>
                  <li id='nav-item' className=' cursor-pointer list-none font-medium text-lg py-[8px] px-[15px] '><Link to="booking" spy={true} smooth = {true} duration={100} offset={-100} >Réservation</Link></li>
              </ul>
              <button className='text-white text-lg bg-[#F2A819] w-24 rounded-full py-2 font-medium my-auto  hover:duration-300 hover:bg-[#ffbb32]'><a href="#contact">Contact</a></button>
            </nav>
            <ResponNav />
        </header>
    </>
  )
}
