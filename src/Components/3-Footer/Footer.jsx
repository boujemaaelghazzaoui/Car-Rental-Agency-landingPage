import React from 'react'
import { FaInstagram, FaRegCopyright, FaXTwitter } from 'react-icons/fa6'
import { MdOutlineMailOutline } from 'react-icons/md'
import { PiMapPinAreaBold } from 'react-icons/pi'
import { SiFacebook } from 'react-icons/si'
import { TbPhone } from 'react-icons/tb'

export default function Footer() {
  return (
    <>
      <footer className=' mt-16  w-[90%] scroll-mt-28 p-12 text-white mx-auto rounded-t-[36px] bg-black'>
        <section className='md:grid md:grid-cols-2 md:gap-10  lg:flex lg:gap-20  w-[100%]  text-white mx-auto'>
          <div className='md:basis-1/2 lg:basis-1/3'>
          <a href='.' className='flex mr-auto '>
            <h1 className="font-poetsen text-4xl text-white " >.</h1>
            <h1 className="font-poetsen text-4xl text-[#F2A819] ">AutoLibre</h1>
          </a>
          <p className='text-white mt-3 md:w-[100%] lg-auto w-[100%] '>
            Voyagez en toute liberté avec notre service de location de voiture.
          </p>
          <span className='flex gap-4 mt-4'>
            <a href="#"><SiFacebook className='text-2xl hover:text-[#F2A819] duration-75' /></a><a href="#"><FaInstagram className='text-2xl hover:text-[#F2A819] duration-75' /></a><a href="#"><FaXTwitter className='text-2xl hover:text-[#F2A819] duration-75' /></a>
          </span>
        </div>
        <div className='md:basis-1/2 lg:basis-1/3 relative z-30 '>
          <h2 className='text-2xl font-semibold text-[#F2A819] md:mt-1 lg:mt-1 mt-7'>
            Liens Utiles
          </h2>
          <ul className=' mt-3'>
            <li className='list-none font-normal mt-1 hover:text-[#F2A819] duration-75 w-16 '><button><a href="#">Accueil</a></button></li>
            <li className='list-none font-normal mt-1 hover:text-[#F2A819] duration-75	w-36 '><button><a href="#about">À Propos de Nous</a></button></li>
            <li className='list-none font-normal mt-1 hover:text-[#F2A819] duration-75	w-20 '><button><a href="#reviews">Témoignages</a></button></li>
            <li className='list-none font-normal mt-1 hover:text-[#F2A819] duration-75 w-16 	'><button><a href="#cars">Voitures</a></button></li>
            <li className='list-none font-normal mt-1 hover:text-[#F2A819] duration-75	w-16 '><button><a href="#booking">Réservation</a></button></li>
          </ul>
        </div>
        <div className='md:basis-1/2 lg:basis-1/3 lg:mt-0'>
          <h2 className='text-2xl font-semibold text-[#F2A819] md:mt-1 lg:mt-1 mt-7 '>
              Contact
          </h2>
          <div className='mt-3'>
            <span className=' flex gap-3 w-60 basis-1/3'>
              <TbPhone className=' mt-1 text-[#F2A819] text-2xl opacity-80' />
              <p className=' leading-6 font-normal' >+212500000000<br />+21250101010101</p>
            </span>
            <span className='flex gap-3 w-60 basis-1/3'>
              <MdOutlineMailOutline className=' mt-3 text-[#F2A819] text-2xl opacity-65 ' />
              <p className=' mt-2 leading-6 font-normal ' >book@autolibre.ma<br />support@autolibre.ma</p>
            </span>
            <span className='flex gap-3 w-60 basis-1/3'>
              <PiMapPinAreaBold className=' text-[#F2A819] text-8xl mt-[-1.5rem] mr-1 opacity-65 ' />
              <p className=' mt-2 leading-6 font-normal z-20' >Bureau 12, 2ème étage Immeuble Elghazzaoui Center Avenue Mohamed V Marrakech 40000, Maroc</p>
            </span>
          </div>
        </div>
        </section>
        <div className='mt-6'>
          <a href='#' className='flex mx-auto  w-[8rem] text-center'>
            <h1 className="font-poetsen text-sm text-white ml-1" >.</h1>
            <h1 className="font-poetsen text-sm text-[#F2A819]">AutoLibre</h1>
            <FaRegCopyright className='mt-[3px] mx-1 text-[13px]' /><p className='text-[13px] mt-[1px]'>2024</p>
          </a>
        </div>
        <div className='mx-auto'>
          <p className='text-[12px]  w-[10rem] mx-auto text-center text-white '>
            By Boujemaa Elghazzaoui
          </p>
        </div>
        <span  className=' '>            
          <img src="./public/assets/Mercedes-C-G.png" alt="Mercedes-C-G" className='w-[300px] ml-[-1.5rem] md:ml-0 lg:ml-0 h-auto absolute transform -scale-x-100  mt-[-10rem] opacity-20  ' />
        </span>
        <span  className=' '>            
          <img src="./public/assets/Audi-Q8.png" alt="Audi-Q8" className=' z-10 w-[300px] ml-[-1.5rem] md:ml-[20rem] lg:ml-[44rem] md:mt-[-9rem] lg:mt-[-9rem]  h-auto absolute transform   mt-[-29rem] opacity-25  ' />
        </span>

        
        
      </footer>
    </>
  )
}
