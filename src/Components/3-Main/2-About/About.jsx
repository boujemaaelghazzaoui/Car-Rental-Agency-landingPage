import React from 'react'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <>
        <motion.section
                initial={{
                    y: '100vh',
                }}
                animate={{
                    y: 0
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }} className='mt-6  mx-auto w-[90%]  opacity-90  bg-black p-5 md:p-5 lg:p-10 md:mt-32 lg:mt-11 rounded-lg scroll-mt-28' id='about'>
          <h2 className='text-3xl font-medium text-white w-[20rem]'>À Propos de Nous :</h2>
          <div className='md:flex lg:flex text-white p-2 justify-between'>
            <p className='text-base md:text-lg lg:text-xl mt-2 relative z-10'>Bienvenue chez AutoLibre, votre partenaire de confiance pour la location de voitures partout au Maroc. Depuis notre création, nous sommes engagés à offrir à nos clients des solutions de mobilité flexibles, abordables et fiables. Que vous voyagiez pour affaires, pour le plaisir, ou que vous ayez simplement besoin d'une voiture pour une journée, nous sommes là pour répondre à vos besoins avec une large gamme de véhicules adaptés à tous les budgets.</p>
            <span className='flex '>
              <h1 className="font-poetsen text-3xl md:text-5xl lg:text-8xl " >.</h1>
              <h1 className="font-poetsen text-3xl md:text-5xl lg:text-8xl text-[#F2A819] ">AutoLibre</h1>
            </span>
            <span  className=' '>            
              <img src="./public/assets/Touareg.png" alt="Touareg" className='w-[300px] h-auto ml-[-1rem] mt-[-10rem]  md:ml-[-20rem]  lg:ml-[-20rem] z-0  absolute  md:mt-24 lg:mt-24 opacity-20  ' />
            </span>

          </div>
        </motion.section>
    </>
  )
}
