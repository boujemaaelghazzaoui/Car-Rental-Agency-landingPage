import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

export default function ResponNav() {
  const [responNav , setResponNav] = useState(false)
  return (
    <>
        <nav className='min-[900.99px]:hidden bg-white w-[100%]  mx-auto shadow-xl '>
              <div className='flex mt-[2rem] mx-auto px-5 py-4 md:py-8 md:px-7 mb-9 md:mt-[-0.99rem] justify-between'>
                <a href='.' className=' flex'>
                  <h1 className=" font-poetsen text-2xl md:text-5xl text-black" >.</h1>
                  <h1 className=" font-poetsen text-2xl md:text-5xl text-[#F2A819]">AutoLibre</h1>
                </a>
                <button  className='hover:text-[#F2A819]'>
                  <GiHamburgerMenu onClick={(open)=>setResponNav(open)} className='text-black my-auto size-5 md:size-8 cursor-pointer'  />
                </button>
              </div>
              <div onClick={(open)=>setResponNav(!open)}  className={!responNav? 'hidden': 'fixed bg-black p-10 bg-opacity-90 top-0 bottom-0 right-0 left-0 ease-out transition-all duration-1000 ' } >
                <div className=' bg-black my-28 mx-auto py-10 px-5 md:px-12 rounded-2xl w-[100%] md:w-[90%]  ease-out transition-all duration-1000'>
                  <div className='flex justify-between gap-5 mb-5'>
                    <a href='.' className=' flex  '>
                      <h1 className=" font-poetsen text-4xl text-black" >.</h1>
                      <h1 className=" font-poetsen text-4xl text-[#F2A819]">AutoLibre</h1>
                    </a>
                    <button className='hover:text-[#F2A819]'>
                      <GrClose onClick={(open)=>setResponNav(!open)} className='text-white my-auto size-5 md:size-6 cursor-pointer' />
                    </button>
                  </div>
                <ul className='  w-[100%] text-white space-y-3 px-3 md:px-3  relative z-50 '>
                  <li onClick={(open)=>setResponNav(!open)} className=' list-none font-medium  text-xl hover:text-[#F2A819] duration-75'><button><a href="#">Accueil</a></button></li>
                  <li onClick={(open)=>setResponNav(!open)} className=' list-none font-medium  text-xl hover:text-[#F2A819] duration-75	'><button><a href="#about">À Propos de Nous</a></button></li>
                  <li onClick={(open)=>setResponNav(!open)} className=' list-none font-medium  text-xl hover:text-[#F2A819] duration-75	'><button><a href="#reviews">Témoignages</a></button></li>
                  <li onClick={(open)=>setResponNav(!open)} className=' list-none font-medium  text-xl hover:text-[#F2A819] duration-75	'><button><a href="#cars">Voitures</a></button></li>
                  <li onClick={(open)=>setResponNav(!open)} className=' list-none font-medium  text-xl hover:text-[#F2A819] duration-75	'><button><a href="#booking">Réservation</a></button></li>
                </ul>
                <button onClick={(open)=>setResponNav(!open)} className='ml-3 md:ml-3 text-white mx-auto relative z-50 text-xl mt-6  bg-[#F2A819] w-32 rounded-md font-medium  h-11 hover:bg-[#f9b836]	 duration-150'><a href="#contact">Contact</a></button>
                </div>
                  <img src="./public/assets/Audi-Q8.png" alt="Audi-Q8" className=' z-20 w-[200px] md:w-[300px] ml-[20%] mt-[-65%] h-auto absolute transform md:ml-[34%]  md:mt-[-38%] opacity-25  ' />
                </div> 
        </nav>
    </>
  )
}
