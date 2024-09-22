import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { ColorRing } from 'react-loader-spinner';

export default function App() {
  const [content , setContent] = useState('');
    const [showLoading , setShowLoading] = useState(true);
    useEffect( () => {
        setTimeout ( () =>{
          setShowLoading(false)
          setContent(<Layout />)
        },500)
    },[])
  return (
    <>
        {
          showLoading ? (
          <div className=' w-[100%] mx-auto mt-[40vh]'>
              <div className='mx-auto w-[30%] md:w-[15%] lg:w-[10%]'><ColorRing className='mx-auto' visible={true} height="120" width="120"  color='#000000' colors={['#000000', '#000000', '#F2A819', '#F2A819', '#F2A819']}  /></div>
          </div>
          
          ) : ( content )
        }

    </>
  )
}
