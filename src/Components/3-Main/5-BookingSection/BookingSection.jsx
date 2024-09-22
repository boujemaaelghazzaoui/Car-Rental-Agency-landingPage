import React from 'react'
import { TbHours24 } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import BookingForm from './BookingForm.jsx'
import { motion } from 'framer-motion';
export default function BookingSection() {
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
                }} className='mt-6  mx-auto w-[90%] scroll-mt-32' id='booking'>
          <h2 className='text-3xl font-medium'>Réservez Maintenant :</h2>
          <div className=' w-[100%] md:flex lg:flex  mt-5 gap-3 mx-auto'>
            <div className=' mx-auto w-60 basis-1/3'>
              <TbHours24 className='text-7xl text-[#F2A819] mx-auto' />
              <p className='text-lg font-medium text-center	'>Assistance Gratuite 24h/24, 7j/7</p>
            </div>   
            <div className='mx-auto w-60 basis-1/3'>
              <FaCar className='text-7xl text-[#F2A819] mx-auto' />
              <p className='text-lg font-medium text-center	'>Livraison et récupération gratuite</p>
            </div>
            <div className='mx-auto w-60 basis-1/3'>
              <BiSolidPlaneAlt className='text-7xl text-[#F2A819] mx-auto' />
              <p className='text-lg font-medium text-center	'>Accueil à l’aéroport</p>
            </div>       
          </div>
          <div className='w-[100%] mx-auto'>
            <BookingForm />
          </div>
          
        </motion.section>
    </>
  )
}
