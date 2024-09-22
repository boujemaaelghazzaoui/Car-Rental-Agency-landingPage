import React from 'react'
import ContactForm from './ContactForm';
import { TbPhone } from 'react-icons/tb';
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiMapPinAreaBold } from 'react-icons/pi';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <motion.section initial={{
                    y: '100vh',
                }}
                animate={{
                    y: 0
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }} className='mt-10  mx-auto w-[90%] scroll-mt-28' id='contact'>
        <h2 className='text-3xl font-medium'>Contactez Nous :</h2>

        <div className='  '>
          <div className='w-[100%] md:flex lg:flex  mt-5 mx-auto   '>
            <span className=' mx-auto basis-1/3'>
              <TbPhone className='my-auto mx-auto mt-1 text-[#F2A819] text-7xl' />
              <p className='text-[17px]  leading-6 font-medium text-center' >+212500000000<br />+21250101010101</p>
            </span>
            <span className='basis-1/3'>
              <MdOutlineMailOutline className='my-auto mt-1 text-[#F2A819] text-7xl mx-auto' />
              <p className='text-[17px]  leading-6 font-medium text-center' >book@autolibre.ma<br />support@autolibre.ma</p>
            </span>
            <span className='basis-1/3'>
              <PiMapPinAreaBold className='my-auto mt-1 text-[#F2A819] text-7xl mx-auto' />
              <p className='text-[17px]  leading-6 font-medium text-center' > Bureau 12, 2ème étage <br className='md:hidden lg:hidden'/> Immeuble Elghazzaoui Guéliz Marrakech 40000</p>
            </span>
          </div>
          <div className='p-5 shadow-xl mt-1  rounded-lg max-w-7xl mx-auto'>
            <ContactForm />
          </div>

        </div>
      </motion.section>
    </>
  )
}
