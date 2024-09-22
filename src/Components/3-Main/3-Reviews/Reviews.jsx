import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {motion} from 'framer-motion'

export default function Reviews() {
  const [reviews , setReviews] = useState([]);
  useEffect(() => {
    fetch('./src/Data/Reviews.json')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching the Reviews:', error));
  }, []);
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2 ,
          autoplay: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          autoplay: true

        }
      }
    ]
  };
  return (
    <>
        <section className='mt-6  mx-auto w-[90%] scroll-mt-28' id='reviews'>
          <h2 className='text-3xl font-medium mb-2'>Témoignages :</h2>
          
            <section className='  gap-10 p-2 mx-auto '>
            <Slider className='' {...settings} >
                {reviews.map(review => ( reviews.length != 0 ?
                <motion.div
                initial={{
                    x: '100%',
                }}
                animate={{
                    y: 0
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }} key={review.id} className='py-4 px-6 mx-auto w-[100%] md:w-auto lg:w-auto border shadow-lg border-[#F2A819]  rounded-lg'>
                  <div className='flex justify-between'>
                    <div className=''>
                      <h3 className=' '>{review.name}</h3>
                      <p className='text-gray-300 text-[12px] '>{review.date}</p>
                    </div>
                    <img src="./public/assets/google-icon-logo.svg" alt="google-icon" className='w-7 h-7 mt-3 ' />
                  </div>
                  <div className='flex mt-1'>
                    <FaStar className= 'text-[#F2A819]' />
                    <FaStar className= 'text-[#F2A819]' />
                    <FaStar className= 'text-[#F2A819]' />
                    <FaStar className= 'text-[#F2A819]' />
                    <FaStar className= 'text-[#F2A819]' />                     
                  </div>
                  <p className='text-[18px] mt-4'>{review.Review}</p>
              </motion.div>:<p>Pas de témoignages en ce moment .</p> ))}
              </Slider>
            </section>
          
        </section>
    </>
  )
}
