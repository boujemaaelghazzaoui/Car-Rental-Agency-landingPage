import React, { useEffect, useState } from 'react'
import { MdOutlineAirlineSeatReclineNormal, MdOutlineSevereCold } from 'react-icons/md';
import { LuFuel } from 'react-icons/lu';
import { TbAutomaticGearbox } from 'react-icons/tb'; 
import { motion } from 'framer-motion';
export default function Cars() {
  const [cars , setCars] = useState([]);
  useEffect(() => {
    fetch('./src/Data/Cars.json')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching the cars:', error));
  }, []);
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
                }} className='mt-6  mx-auto w-[90%] scroll-mt-28' id='cars'>
          <h2 className='text-3xl font-medium mb-1 '>Nos Voitures  :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
            {cars.map(car => (
            <div key={car.id} className="bg-white mx-auto w-[100%] md:w-auto lg:w-auto  shadow-lg hover:border-[#F2A819] border hover:shadow-[#F2A819] hover:duration-200  rounded-lg">
              <img src={car.brand} className='w-[150px]   mx-auto mt-3 ' alt="amg" />
              <img src={car.image} alt={car.name} className='w-64 h-36 mx-auto mt-4' />
              <h2 className="text-3xl font-medium ml-3 mt-3 leading-9">{car.name}</h2>
              <p className="text-gray-500 text-[20px] ml-3 ">À partir de {car.price} MAD/jour</p>
              <div className='flex gap-1 md:gap-2 lg:gap-2 justify-between mx-auto px-3  mt-5 w-[100%]  '>
                <span className=' w-[25%]'>
                  <MdOutlineSevereCold className=' mx-auto size-5 md:size-8 lg:size-7 text-[#F2A819]' />
                  <p className=' text-center text-[10px] md:text-sm lg:text-sm font-medium'>Climatisé</p>
                </span>
                <span className='w-[25%]'>
                  <LuFuel className=' mx-auto size-5 md:size-8 lg:size-7 text-[#F2A819]' />
                  <p className='  text-center text-[10px] md:text-sm lg:text-sm font-medium'>Diesel</p>
                </span>
                <span className='w-[25%]'>
                  <TbAutomaticGearbox className=' mx-auto size-5 md:size-8 lg:size-7 text-[#F2A819]' />
                  <p className='text-center text-[10px] md:text-sm lg:text-sm font-medium'>Auto</p>
                </span>
                <span className='w-[25%]'>
                  <MdOutlineAirlineSeatReclineNormal className=' mx-auto size-5 md:size-8 lg:size-7 text-[#F2A819]' />
                  <p className='text-center text-[10px] md:text-sm lg:text-sm font-medium'>5 places </p>
                </span>
                
              </div>
            
              <div className=''><button className='text-white bg-[#F2A819] w-[100%] mt-[12px] h-12  rounded-b-lg font-medium	text-lg hover:duration-300 hover:bg-[#ffbb32]	 '><a href="#booking">Réservez Maintenant</a></button></div>
            </div>
              ))}
          </div>
        </motion.section>
    </>
  )
}
