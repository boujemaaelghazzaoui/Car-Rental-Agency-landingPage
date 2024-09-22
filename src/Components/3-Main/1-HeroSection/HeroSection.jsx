import React from 'react'
import {motion} from 'framer-motion'

export default function HeroSection() {
  const containerVariant = {
    hidden: {
        y: '-100vw'
    },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        }
    }
  }

  return (
    <>
        <motion.section variants={containerVariant} initial='hidden' animate='visible' className=' h-auto mt-20 md:flex lg:flex  mx-auto w-[90%] scroll-mt-28 md:mt-36 lg:mt-36 'id='accueil' >
          <div className='w-[100%] md:w-[40rem] lg:w-[48rem] relative mt-9 z-10 md:mt-[-rem] '>
            <p className=' w-[100%] text-3xl md:text-5xl lg:text-7xl font-semibold 	leading-none '>La route de votre prochaine aventure commence ici.</p>
            <p className=' w-[80%] text-lg md:text-2xl lg:text-2xl font-normal mt-1 leading-none '>Voyagez en toute liberté avec notre service de location de voiture.</p>
            <button className='text-white bg-[#F2A819] w-40 text-sm lg:w-[215px] md:w-[215px] mt-2 md:mt-8 lg:mt-8 h-9 md:h-12 lg:h-12 rounded-2xl font-medium lg:text-lg	md:text-lg hover:duration-300 hover:bg-[#ffbb32]		'><a href="#booking">Réservez Maintenant</a></button>
          </div>
          <div className='z-0 opacity-50  ml-[43%] md:ml-[-20rem] lg:ml-0  md:mt-[-1rem] md:opacity-50 lg:opacity-100'>
            <div className='w-[50px] md:w-[150px] lg:w-[150px] mx-auto bg-[#F2A819] h-[150px]  mt-[-28vh] md:mt-0 lg:mt-12 md:ml-20 lg:ml-20 md:h-[370px] lg:h-[370px] rounded-l-[85px] ml-20  absolute ' ></div>
            <div className='w-[50px] md:w-[150px] lg:w-[150px] mx-auto bg-[#F2A819] mt-[-27.5vh] md:mt-4 lg:mt-16 h-[150px] md:h-[370px] lg:h-[370px] rounded-r-[85px] absolute ml-32 md:ml-56 lg:ml-56' ></div>
            <img src="./public/assets/Audi-Q8.png" alt="Audi-Q8" className=' w-28 md:w-80 lg:w-80 h-auto  absolute ml-20 md:ml-24 lg:ml-24   mt-[-26vh] md:mt-0 lg:mt-14 transform -scale-x-100 ' />
            <img src="./public/assets/Mercedes-C-G.png" alt="Mercedes-C-G" className=' w-28 md:w-80 lg:w-80 h-auto  absolute  md:ml-24 lg:ml-20   mt-[-16vh] lg:mt-60 md:mt-44 ml-20   ' />
          </div>
          
        </motion.section>
    </>
  )
}
