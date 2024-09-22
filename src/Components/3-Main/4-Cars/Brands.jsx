import React from 'react'

export default function Brands() {
  return (
    <>
        <h2 className='text-3xl font-medium mb-1'>Nos Voitures  :</h2>
          <div className='flex space-x-6 mx-auto'>
            <div className=' bg-transparent  w-[15rem] pt-5 my-auto'>
              <img src="./public/assets/amg.png" className='w-[150px]  mx-auto opacity-9  ' alt="amg" />
              <p className='font-bold italic text-2xl mt-[-20px] mx-12  '>Mercedes</p>
            </div>
            <div className=' bg-transparent  w-[15rem] pt-5 my-auto'>
            <img src="./public/assets/audi.png" className='w-[150px] my-auto opacity-9' alt="audi" />
              <p className='font-bold italic text-2xl mt-[-20px] mx-12  '>Audi</p>
            </div>
            <div className=' bg-transparent  w-[15rem] pt-5 my-auto'>
            <img src="./public/assets/porsche.png" className='w-[150px]  my-auto opacity-9 ' alt="porche" />
              <p className='font-bold italic text-2xl mt-[-20px] mx-7'>Porsche</p>
            </div>
            <div className=' bg-transparent  w-[15rem] pt-5 my-auto'>
            <img src="./public/assets/Volkswagen.png" className='w-[150px]  my-auto opacity-9' alt="Volkswagen" />
              <p className='font-bold italic text-2xl mt-[-20px] mx-auto  '>Volkswagen</p>
            </div>
            <div className=' bg-transparent  w-[15rem] pt-5 my-auto'>
            <img src="./public/assets/land-rover.png" className='w-[150px]  my-auto opacity-9' alt="land-rover" />
              <p className='font-bold italic text-2xl mt-[-20px] mx-[7px]'>Land Rover</p>
            </div>
          </div>
    </>
  )
}
